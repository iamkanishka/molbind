import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@molbindapi/auth'; // Adjust the import path as necessary
import { ProfileModule } from '@molbindapi/profile'; // Adjust the import path as necessary
// Note: The import path for AuthModule should match the actual path in your project structure

@Module({
  imports: [AuthModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
