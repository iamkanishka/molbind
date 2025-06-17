import { SetMetadata } from '@nestjs/common';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IEthUser } from '../interfaces/eth-user.interface';

export const EthPublic = () => SetMetadata('isPublic', true);

export const EthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): IEthUser => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);