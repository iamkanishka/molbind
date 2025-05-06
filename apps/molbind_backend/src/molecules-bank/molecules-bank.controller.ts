import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoleculesBankService } from './molecules-bank.service';
import { CreateMoleculesBankDto } from './dto/create-molecules-bank.dto';
import { UpdateMoleculesBankDto } from './dto/update-molecules-bank.dto';

@Controller('molecules-bank')
export class MoleculesBankController {
  constructor(private readonly moleculesBankService: MoleculesBankService) {}

  @Post()
  create(@Body() createMoleculesBankDto: CreateMoleculesBankDto) {
    return this.moleculesBankService.create(createMoleculesBankDto);
  }

  @Get()
  findAll() {
    return this.moleculesBankService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moleculesBankService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoleculesBankDto: UpdateMoleculesBankDto) {
    return this.moleculesBankService.update(+id, updateMoleculesBankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moleculesBankService.remove(+id);
  }
}
