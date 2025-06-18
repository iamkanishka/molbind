import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from '../services/auth.service';
import { IEthUser } from '../interfaces/eth-user.interface';


@Injectable()
export class EthStrategy extends PassportStrategy(Strategy, 'eth') {
  constructor(private readonly authService: AuthService) {
    if (!process.env['JWT_SECRET']) {
      throw new Error('JWT_SECRET environment variable is not defined');
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env['JWT_SECRET'] as string,
    });
  }

  async validate(payload: any): Promise<IEthUser> {
    return { ethAddress: payload.ethAddress };
  }
}