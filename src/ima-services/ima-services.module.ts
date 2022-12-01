import { Module } from '@nestjs/common';
import { ImaServicesService } from './ima-services.service';
import { ImaServicesResolver } from './ima-services.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImaService } from './ima-service.entity';
import { ClientsModule } from 'src/clients/clients.module';
import { EmployeesModule } from 'src/employees/employees.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ImaService]),
    ClientsModule,
    EmployeesModule,
  ],
  providers: [ImaServicesService, ImaServicesResolver],
})
export class ImaServicesModule {}
