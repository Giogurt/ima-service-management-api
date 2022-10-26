import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImaService } from './ima-service.entity';

@Injectable()
export class ImaServicesService {
    constructor(@InjectRepository(ImaService) private imaServiceRepository: Repository<ImaService>) {}

    // async findAll(): Promise<ImaService[]> {
    //     const imaService = new ImaService();
    //     imaService.id = 1;
    //     imaService.clientName = "Clientongo";

    //     return [imaService];
    // }
    async findAll(): Promise<ImaService[]> {
        return this.imaServiceRepository.find();
    }
}
