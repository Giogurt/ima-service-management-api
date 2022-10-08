import { Test, TestingModule } from '@nestjs/testing';
import { ImaServicesService } from './ima-services.service';

describe('ImaServicesService', () => {
  let service: ImaServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImaServicesService],
    }).compile();

    service = module.get<ImaServicesService>(ImaServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
