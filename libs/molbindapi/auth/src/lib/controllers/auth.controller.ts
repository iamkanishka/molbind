import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Param,
  UnauthorizedException,
} from '@nestjs/common';
import { EthPublic, EthUserDecorator } from '../decorators/eth-auth.decorator';
import { EthAuthGuard } from '../guards/eth-guard.guard';
import { AuthService } from '../services/auth.service';
import { IEthUser } from '../interfaces/eth-user.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @EthPublic()
  @Get('nonce/:ethAddress')
  async getNonce(
    @Param('ethAddress') ethAddress: string
  ): Promise<{ nonce: string }> {
    const nonce = await this.authService.requestNonce(ethAddress);
    return { nonce };
  }

  @EthPublic()
  @Post('login')
  async login(
    @Body('ethAddress') ethAddress: string,
    @Body('signature') signature: string
  ): Promise<{ token: string }> {
    const user = await this.authService.validateUser(ethAddress, signature);
    if (!user) throw new UnauthorizedException('Invalid signature');

    const token = await this.authService.login(user);
    return { token };
  }

  @UseGuards(EthAuthGuard)
  @Get('me')
  getProfile(@EthUserDecorator() user: IEthUser): IEthUser {
    return user;
  }
}
