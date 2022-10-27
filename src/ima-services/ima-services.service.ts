import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientsService } from 'src/clients/clients.service';
import { Client } from 'src/clients/entities/client.entity';
import { Repository } from 'typeorm';
import { CreateImaServiceInput } from './dto/create-ima-service.input';
import { ImaService } from './ima-service.entity';

@Injectable()
export class ImaServicesService {
  constructor(
    @InjectRepository(ImaService)
    private imaServiceRepository: Repository<ImaService>,
    private clientsService: ClientsService,
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
      });
    }

    const serviceProps = {
      ...createImaServiceInput,
      ...{ clientId: serviceClient.id, status: 'pending', completedPercent: 0 },
    };

    const newImaService = this.imaServiceRepository.create(
      serviceProps,
    );

    return this.imaServiceRepository.save(newImaService);
  }

  async findAll(): Promise<ImaService[]> {
    return this.imaServiceRepository.find();
  }

  async getClient(clientId: number): Promise<Client> {
    return this.clientsService.findOne(clientId);
  }

  async getClientByEmail(clientEmail: string): Promise<Client> {
    return this.clientsService.findOneByEmail(clientEmail);
  }
}
