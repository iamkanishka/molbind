import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IEthUser } from '../interfaces/eth-user.interface';
import { NonceService } from './nonce.service';
import { SignatureService } from './signature.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly nonceService: NonceService,
    private readonly signatureService: SignatureService,
  ) {}

  async requestNonce(ethAddress: string): Promise<string> {
    return this.nonceService.generateNonce(ethAddress);
  }

  async validateUser(ethAddress: string, signature: string): Promise<IEthUser | null> {
    const nonce = await this.nonceService.getCurrentNonce(ethAddress);
    if (!nonce) return null;

    const isValid = this.signatureService.verifySignature(nonce, signature, ethAddress);
    if (!isValid) return null;

    await this.nonceService.verifyNonce(ethAddress, nonce);

    return { ethAddress };
  }

  async login(user: IEthUser): Promise<string> {
    const payload = { ethAddress: user.ethAddress };
    return this.jwtService.sign(payload);
  }

  async verifyToken(token: string): Promise<IEthUser | null> {
    try {
      const payload = this.jwtService.verify(token);
      return { ethAddress: payload.ethAddress };
    } catch (error) {
      return null;
    }
  }
}