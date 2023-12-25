import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['stars', 'katanas'], { message: 'Please use right weapon' })
  weapon: 'stars' | 'katanas';
}
