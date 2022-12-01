import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientsService } from 'src/clients/clients.service';
import { Client } from 'src/clients/entities/client.entity';
import { Employee } from 'src/employees/employee.entity';
import { EmployeesService } from 'src/employees/employees.service';
import { Repository } from 'typeorm';
import { CreateImaServiceInput } from './dto/create-ima-service.input';
import { UpdateImaServiceInput } from './dto/update-ima-service.input';
import { ImaService } from './ima-service.entity';

@Injectable()
export class ImaServicesService {
  constructor(
    @InjectRepository(ImaService)
    private imaServiceRepository: Repository<ImaService>,
    private clientsService: ClientsService,
    private employeeService: EmployeesService,
  ) {}

  async createImaService(
    createImaServiceInput: CreateImaServiceInput,
  ): Promise<ImaService> {
    let serviceClient = new Client();

    try {
      serviceClient = await this.getClientByEmail(
        createImaServiceInput.clientEmail,
      );
    } catch {
      serviceClient = await this.clientsService.createClient({
        name: createImaServiceInput.clientName,
        email: createImaServiceInput.clientEmail,
        phone: createImaServiceInput.clientPhone,
      });
    }

    const serviceProps = {
      ...createImaServiceInput,
      ...{ clientId: serviceClient.id, status: 'pending', completedPercent: 0 },
    };

    const newImaService = this.imaServiceRepository.create(serviceProps);

    return this.imaServiceRepository.save(newImaService);
  }

  async findAll(): Promise<ImaService[]> {
    return this.imaServiceRepository.find();
  }

  async findOne(id: number): Promise<ImaService> {
    return this.imaServiceRepository.findOneByOrFail({ id: id });
  }

  async update(updateImaServiceInput: UpdateImaServiceInput): Promise<ImaService> {
    await this.imaServiceRepository.update(updateImaServiceInput.id, updateImaServiceInput);
    return this.findOne(updateImaServiceInput.id)
  }


  async getClient(clientId: number): Promise<Client> {
    return this.clientsService.findOne(clientId);
  }

  async getClientByEmail(clientEmail: string): Promise<Client> {
    return this.clientsService.findOneByEmail(clientEmail);
  }

  async getEmployee(employeeId: number): Promise<Employee> {
    return this.employeeService.findOne(employeeId);
  }

  /**
   * Checks if the client phone matches the phone linked to the service.
   * If true returns the service, if false returns an empty service
   * @param {string} clientPhone Phone of the client linked to the service
   * @param {number} serviceId Id of the service to retrieve
   * @returns {ImaService} If true returns the service, if false returns an empty service
   */
  async authenticateClientWithPhone(clientPhone: string, serviceId: number): Promise<ImaService> {
    const service = await this.findOne(serviceId);
    const client = await this.getClient(service.clientId)

    if (client.phone === clientPhone) {
      return service;
    }
    return Promise.reject(new Error('The phone provided is incorrect'));
  }
}
