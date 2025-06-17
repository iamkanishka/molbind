export interface AuthModuleOptions {
  jwtSecret: string;
  jwtExpiresIn?: string;
  nonceExpiresIn?: number; // in seconds
}
export interface AuthModuleAsyncOptions {
  useFactory?: (...args: any[]) => Promise<AuthModuleOptions> | AuthModuleOptions;
  inject?: any[];
  imports?: any[];
}