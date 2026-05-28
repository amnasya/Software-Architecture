import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRunDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  run_category_id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  vod_url: string;

  @ApiProperty()
  @IsNumber()
  run_duration: number;
}