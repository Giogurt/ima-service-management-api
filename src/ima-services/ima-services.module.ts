import { Module } from '@nestjs/common';
import { ImaServicesService } from './ima-services.service';
import { ImaServicesResolver } from './ima-services.resolver';

@Module({
  providers: [ImaServicesService, ImaServicesResolver]
})
export class ImaServicesModule {}
