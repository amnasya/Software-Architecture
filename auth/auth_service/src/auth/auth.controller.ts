import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiCreatedResponse({ description: 'User registered successfully.' })
  @ApiBadRequestResponse({ description: 'Submitted registration data is invalid.' })
  @ApiConflictResponse({ description: 'Email or username is already registered.' })
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @ApiOkResponse({ description: 'JWT access token generated successfully.' })
  @ApiBadRequestResponse({ description: 'Submitted login data is invalid.' })
  @ApiUnauthorizedResponse({ description: 'Email or password is invalid.' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
