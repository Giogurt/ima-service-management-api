import { Injectable } from '@nestjs/common';
import { ImaService } from './ima-service.entity';

@Injectable()
export class ImaServicesService {
    async findAll(): Promise<ImaService[]> {
        const imaService = new ImaService();
        imaService.id = 1;
        imaService.clientName = "Clientongo";

        return [imaService];
    }
}
