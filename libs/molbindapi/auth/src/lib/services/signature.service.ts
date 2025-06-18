import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class SignatureService {
  verifySignature(message: string, signature: string, ethAddress: string): boolean {
    try {
      const recoveredAddress = ethers.verifyMessage(message, signature);
      return recoveredAddress.toLowerCase() === ethAddress.toLowerCase();
    } catch (error) {
      return false;
    }
  }
}