import { CreateNinjaDto } from './create-ninja.dto';

export class UpdateNinjaDto extends PartialType(CreateNinjaDto) {}
function PartialType(CreateNinjaDto: typeof CreateNinjaDto) {
  throw new Error('Function not implemented.');
}

