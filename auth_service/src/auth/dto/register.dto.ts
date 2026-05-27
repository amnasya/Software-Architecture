import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    example: 'speedrunner01',
    description: 'Unique username for the new account.',
  })
  @IsString()
  @IsNotEmpty()
  username!: string;

  @ApiProperty({
    example: 'runner@example.com',
    description: 'Unique email address used for login.',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'Indonesia',
    description: 'User country of origin.',
  })
  @IsString()
  @IsNotEmpty()
  country!: string;

  @ApiProperty({
    example: 'Str0ngPassword!',
    minLength: 8,
    description: 'Plain password submitted by the user before hashing.',
  })
  @IsString()
  @MinLength(8)
  password!: string;
}
