import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeesService {
    constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>) {}

    async createEmployee(createEmployeeInput: CreateEmployeeInput): Promise<Employee> {
        createEmployeeInput = {...createEmployeeInput, role: "administrator"};
        
        const newEmployee = this.employeeRepository.create(createEmployeeInput);

        return this.employeeRepository.save(newEmployee);
    }

    async findOne(id: number): Promise<Employee> {
        return this.employeeRepository.findOneOrFail({
            where: {
                id: id
            }
        });
    }
}
