import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  //GET NINJAS
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
  }
  //GET NINJAS:ID
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
  //POST NINJAS
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      name: createNinjaDto.name,
    };
  }
  //PUT NINJAS:ID
  @Put(':id')
  updateNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
  //DELETE NINJAS
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
}
