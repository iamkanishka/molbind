// import { Injectable } from '@nestjs/common';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';

// @Injectable()
// export class AuthService {
//   create(createAuthDto: CreateAuthDto) {
//     return 'This action adds a new auth';
//   }

//   findAll() {
//     return `This action returns all auth`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} auth`;
//   }

//   update(id: number, updateAuthDto: UpdateAuthDto) {
//     return `This action updates a #${id} auth`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} auth`;
//   }
// }


// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class AuthService {
  private nonces = new Map<string, string>(); // In production, use Redis or DB

  generateNonce(address: string): string {
    const nonce = `Login nonce: ${Math.floor(Math.random() * 1000000)}`;
    this.nonces.set(address.toLowerCase(), nonce);
    return nonce;
  }

  verifySignature(address: string, signature: string): boolean {
    const nonce = this.nonces.get(address.toLowerCase());
    if (!nonce) throw new UnauthorizedException('Nonce not found');

    const recoveredAddress = ethers.verifyMessage(nonce, signature);

    if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
      this.nonces.delete(address.toLowerCase());
      return true;
    } else {
      throw new UnauthorizedException('Invalid signature');
    }
  }
}

