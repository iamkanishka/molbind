import { Injectable } from '@nestjs/common';
import { CreateMoleculesBankDto } from './dto/create-molecules-bank.dto';
import { UpdateMoleculesBankDto } from './dto/update-molecules-bank.dto';

@Injectable()
export class MoleculesBankService {
  create(createMoleculesBankDto: CreateMoleculesBankDto) {
    return 'This action adds a new moleculesBank';
  }

  findAll() {
    return `This action returns all moleculesBank`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moleculesBank`;
  }

  update(id: number, updateMoleculesBankDto: UpdateMoleculesBankDto) {
    return `This action updates a #${id} moleculesBank`;
  }

  remove(id: number) {
    return `This action removes a #${id} moleculesBank`;
  }
}
