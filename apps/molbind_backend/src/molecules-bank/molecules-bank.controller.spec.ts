import { Test, TestingModule } from '@nestjs/testing';
import { MoleculesBankController } from './molecules-bank.controller';
import { MoleculesBankService } from './molecules-bank.service';

describe('MoleculesBankController', () => {
  let controller: MoleculesBankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoleculesBankController],
      providers: [MoleculesBankService],
    }).compile();

    controller = module.get<MoleculesBankController>(MoleculesBankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
