import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ProfileRepository,
  PostRepository,
  BrandRepository,
  InterestRepository,
} from '../repositories';
import { AnalyzeController } from './analyze.controller';
import { AnalyzeService } from './analyze.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProfileRepository,
      PostRepository,
      BrandRepository,
      InterestRepository,
    ]),
  ],
  controllers: [AnalyzeController],
  providers: [AnalyzeService],
})
export class AnalyzeModule {}
