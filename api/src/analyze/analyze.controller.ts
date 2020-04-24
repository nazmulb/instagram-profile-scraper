import { Controller, Param, Post } from '@nestjs/common';
import { AnalyzeService } from './analyze.service';

@Controller('analyze')
export class AnalyzeController {
  constructor(private readonly analyzeService: AnalyzeService) {}

  @Post(':userHandle')
  scrapeAndAnalyzeProfile(@Param('userHandle') userHandle: string): string {
    return this.analyzeService.scrapeAndAnalyzeProfile(userHandle);
  }
}
