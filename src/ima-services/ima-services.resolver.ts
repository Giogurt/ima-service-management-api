import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Client } from 'src/clients/entities/client.entity';
import { Employee } from 'src/employees/employee.entity';
import { CreateImaServiceInput } from './dto/create-ima-service.input';
import { UpdateImaServiceInput } from './dto/update-ima-service.input';
import { ImaService } from './ima-service.entity';
import { ImaServicesService } from './ima-services.service';

@Resolver(() => ImaService)
export class ImaServicesResolver {
  constructor(private imaServicesService: ImaServicesService) {}

  @Query(() => [ImaService])
  imaServices(): Promise<ImaService[]> {
    return this.imaServicesService.findAll();
  }

  @Query(() => ImaService)
  imaService(@Args('id', { type: () => Int }) id: number): Promise<ImaService> {
    return this.imaServicesService.findOne(id);
  }

  @Query(() => ImaService)
  clientService(
    @Args('serviceId', { type: () => Int}) serviceId: number, 
    @Args('clientPhone') clientPhone: string,
  ): Promise<ImaService> {
    return this.imaServicesService.authenticateClientWithPhone(clientPhone, serviceId);
  }

  @ResolveField(() => Client)
  client(@Parent() service: ImaService): Promise<Client> {
    return this.imaServicesService.getClient(service.clientId);
  }

  @ResolveField(() => Employee)
  employee(@Parent() service: ImaService): Promise<Employee> {
    return this.imaServicesService.getEmployee(service.employeeId);
  }

  @Mutation(() => ImaService)
  createImaService(
    @Args('createImaServiceInput') createImaServiceInput: CreateImaServiceInput,
  ): Promise<ImaService> {
    return this.imaServicesService.createImaService(createImaServiceInput);
  }

  @Mutation(() => ImaService)
  updateImaService(
    @Args('updateImaServiceInput') updateImaServiceInput: UpdateImaServiceInput,
  ): Promise<ImaService> {
    return this.imaServicesService.update(updateImaServiceInput);
  }
}
