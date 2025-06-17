import { Injectable } from '@nestjs/common';
 

@Injectable()
export abstract class NonceService {
  abstract generateNonce(ethAddress: string): Promise<string>;
  abstract verifyNonce(ethAddress: string, nonce: string): Promise<boolean>;
  abstract getCurrentNonce(ethAddress: string): Promise<string | null>;
}

@Injectable()
export class MemoryNonceService implements NonceService {
  private nonceStore: Record<string, { nonce: string; expiresAt: number }> = {};

  async generateNonce(ethAddress: string): Promise<string> {
    const nonce = Math.floor(Math.random() * 1000000).toString();
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes expiration
    
    this.nonceStore[ethAddress.toLowerCase()] = { nonce, expiresAt };
    return nonce;
  }

  async verifyNonce(ethAddress: string, nonce: string): Promise<boolean> {
    const record = this.nonceStore[ethAddress.toLowerCase()];
    if (!record) return false;
    
    const isValid = record.nonce === nonce && record.expiresAt > Date.now();
    if (isValid) {
      delete this.nonceStore[ethAddress.toLowerCase()];
    }
    return isValid;
  }

  async getCurrentNonce(ethAddress: string): Promise<string | null> {
    const record = this.nonceStore[ethAddress.toLowerCase()];
    if (!record || record.expiresAt <= Date.now()) return null;
    return record.nonce;
  }
}