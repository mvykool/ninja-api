import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  //GET NINJAS
  @Get()
  getNinjas() {
    return [];
  }
  //GET NINJAS:ID
  @Get(':id')
  getOneNinja() {
    return [];
  }
  //POST NINJAS
  @Post()
  createNinja() {
    return {};
  }
  //PUT NINJAS:ID
  @Put(':id')
  updateNinja() {
    return {};
  }
  //DELETE NINJAS
  @Delete(':id')
  deleteNinja() {
    return {};
  }
}
