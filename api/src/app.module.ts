import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnalyzeModule } from './analyze/analyze.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [AnalyzeModule, ProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
