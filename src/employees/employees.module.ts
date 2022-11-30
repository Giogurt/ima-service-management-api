import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesResolver } from './employees.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeesService, EmployeesResolver],
  exports: [EmployeesService]
})
export class EmployeesModule {}
