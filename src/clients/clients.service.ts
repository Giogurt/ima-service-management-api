import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}

  async createClient(createClientInput: CreateClientInput): Promise<Client> {
    const newClient = this.clientRepository.create(createClientInput);

    return this.clientRepository.save(newClient);
  }

  async findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  async findOneByEmail(email: string): Promise<Client> {
    return this.clientRepository.findOneByOrFail({ email: email });
  }

  async findOne(id: number): Promise<Client> {
    return this.clientRepository.findOneOrFail({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateClientInput: UpdateClientInput) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
