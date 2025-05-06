import { Test, TestingModule } from '@nestjs/testing';
import { MoleculesBankService } from './molecules-bank.service';

describe('MoleculesBankService', () => {
  let service: MoleculesBankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoleculesBankService],
    }).compile();

    service = module.get<MoleculesBankService>(MoleculesBankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
