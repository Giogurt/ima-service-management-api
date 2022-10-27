import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Client } from 'src/clients/entities/client.entity';
import { CreateImaServiceInput } from './dto/create-ima-service.input';
import { ImaService } from './ima-service.entity';
import { ImaServicesService } from './ima-services.service';

@Resolver(() => ImaService)
export class ImaServicesResolver {
  constructor(private imaServicesService: ImaServicesService) {}

  @Query(() => [ImaService])
  imaServices(): Promise<ImaService[]> {
    return this.imaServicesService.findAll();
  }

  @ResolveField(() => Client)
  client(@Parent() service: ImaService): Promise<Client> {
    return this.imaServicesService.getClient(service.clientId);
  }

  @Mutation(() => ImaService)
  createImaService(
    @Args('createImaServiceInput') createImaServiceInput: CreateImaServiceInput,
  ): Promise<ImaService> {
    return this.imaServicesService.createImaService(createImaServiceInput);
  }
}
