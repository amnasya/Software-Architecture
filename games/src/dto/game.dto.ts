import { IsString, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateGameDto {
  @ApiProperty({ example: 'Super Mario 64', description: "Game's name" })
  @IsString()
  @IsNotEmpty()
  game_name: string;

  @ApiProperty({ example: 'A classic 3D platformer game', description: "Game's description" })
  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UpdateGameDto {
  @ApiPropertyOptional({ example: 'Super Mario 64 DS', description: "Updated game's name" })
  @IsString()
  @IsOptional()
  game_name?: string;

  @ApiPropertyOptional({ example: 'An updated classic 3D platformer game', description: "Updated game's description" })
  @IsString()
  @IsOptional()
  description?: string;
}

export class CreateCategoryDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Game ID' })
  @IsUUID()
  @IsNotEmpty()
  game_id: string;

  @ApiProperty({ example: 'Any%', description: 'Name of the speedrun category' })
  @IsString()
  @IsNotEmpty()
  run_category_name: string;
}

export class UpdateCategoryDto {
  @ApiPropertyOptional({ description: 'Updated run category name' })
  @IsString()
  @IsOptional()
  run_category_name?: string;
}