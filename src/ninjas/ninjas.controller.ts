import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  //GET NINJAS array
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
  createNinja() {
    return {};
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
