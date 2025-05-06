import { PartialType } from '@nestjs/mapped-types';
import { CreateMoleculesBankDto } from './create-molecules-bank.dto';

export class UpdateMoleculesBankDto extends PartialType(CreateMoleculesBankDto) {}
