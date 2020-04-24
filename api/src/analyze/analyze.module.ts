import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileRepository } from '../repositories/profile.repository';
import { AnalyzeController } from './analyze.controller';
import { AnalyzeService } from './analyze.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileRepository])],
  controllers: [AnalyzeController],
  providers: [AnalyzeService],
})
export class AnalyzeModule {}
