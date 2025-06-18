import { Module, DynamicModule, Provider } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { EthAuthGuard } from './guards/eth-guard.guard';
import { AuthService } from './services/auth.service';
import { MemoryNonceService, NonceService } from './services/nonce.service';
import { SignatureService } from './services/signature.service';
import { EthStrategy } from './strategy/eth.strategy';
import {
  AuthModuleOptions,
  AuthModuleAsyncOptions,
} from './interfaces/auth-options.interface';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [JwtModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    MemoryNonceService,
    { provide: NonceService, useExisting: MemoryNonceService },
    SignatureService,
    EthStrategy,
    EthAuthGuard,
  ],
  exports: [AuthService, NonceService, EthAuthGuard],
})
export class AuthModule {
  static forRoot(options: AuthModuleOptions): DynamicModule {
    return {
      module: AuthModule,
      imports: [
        JwtModule.register({
          secret: options.jwtSecret,
          signOptions: { expiresIn: options.jwtExpiresIn || '1h' },
        }),
      ],
    };
  }

  static forRootAsync(options: AuthModuleAsyncOptions): DynamicModule {
    const providers = this.createAsyncProviders(options);
    return {
      module: AuthModule,
      imports: options.imports || [],
      providers: [
        ...providers,
        AuthService,
        MemoryNonceService,
        { provide: NonceService, useExisting: MemoryNonceService },
        SignatureService,
        EthStrategy,
        EthAuthGuard,
      ],
      exports: [AuthService, NonceService, EthAuthGuard],
    };
  }

  private static createAsyncProviders(
    options: AuthModuleAsyncOptions
  ): Provider[] {
    if (options.useFactory) {
      return [
        {
          provide: 'AUTH_OPTIONS',
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
      ];
    }
    return [];
  }
}
