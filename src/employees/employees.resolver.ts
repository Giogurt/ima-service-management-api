import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { Employee } from './employee.entity';
import { EmployeesService } from './employees.service';

@Resolver()
export class EmployeesResolver {
    constructor(private employeesService: EmployeesService) {}

    @Query(() => Employee)
    employee(@Args('id', {type: () => Int}) id: number): Promise<Employee> {
        return this.employeesService.findOne(id);
    }
    
    @Mutation(() => Employee)
    createEmployee(@Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput): Promise<Employee> {
        return this.employeesService.createEmployee(createEmployeeInput);
    }
}
