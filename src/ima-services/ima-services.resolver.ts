import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createImaServiceInput } from './dto/create-ima-service.input';
import { ImaService } from './ima-service.entity';
import { ImaServicesService } from './ima-services.service';

@Resolver()
export class ImaServicesResolver {
    constructor(private imaServicesService: ImaServicesService) {}

    @Query(returns => [ImaService])
    imaServices(): Promise<ImaService[]> {
        return this.imaServicesService.findAll();
    }

    @Mutation(returns => ImaService)
    createImaService(@Args('createImaServiceInput') createImaServiceInput: createImaServiceInput): Promise<ImaService> {
        return this.imaServicesService.createImaService(createImaServiceInput);
    }
}
