import { Test, TestingModule } from '@nestjs/testing';
import { ImaServicesResolver } from './ima-services.resolver';

describe('ImaServicesResolver', () => {
  let resolver: ImaServicesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImaServicesResolver],
    }).compile();

    resolver = module.get<ImaServicesResolver>(ImaServicesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
