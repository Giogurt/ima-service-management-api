import { Module } from '@nestjs/common';
import { ImaServicesService } from './ima-services.service';
import { ImaServicesResolver } from './ima-services.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImaService } from './ima-service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImaService])],
  providers: [ImaServicesService, ImaServicesResolver]
})
export class ImaServicesModule {}
