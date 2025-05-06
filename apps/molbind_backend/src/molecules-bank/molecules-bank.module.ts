import { Module } from '@nestjs/common';
import { MoleculesBankService } from './molecules-bank.service';
import { MoleculesBankController } from './molecules-bank.controller';

@Module({
  controllers: [MoleculesBankController],
  providers: [MoleculesBankService],
})
export class MoleculesBankModule {}
