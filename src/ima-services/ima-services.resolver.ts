import { Query, Resolver } from '@nestjs/graphql';
import { ImaService } from './ima-service.entity';
import { ImaServicesService } from './ima-services.service';

@Resolver()
export class ImaServicesResolver {
    constructor(private imaServicesService: ImaServicesService) {}

    @Query(returns => [ImaService])
    imaServices(): Promise<ImaService[]> {
        return this.imaServicesService.findAll();
    }
}
