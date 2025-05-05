// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('nonce')
  getNonce(@Body('address') address: string) {
    const nonce = this.authService.generateNonce(address);
    return { nonce };
  }

  @Post('verify')
  verifySignature(@Body() body: { address: string; signature: string }) {
    const valid = this.authService.verifySignature(body.address, body.signature);
    return { success: valid, token: 'mock-jwt-token' }; // Replace with real JWT
  }
}
