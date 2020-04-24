import { Controller, Param, Post } from '@nestjs/common';
import { AnalyzeService } from './analyze.service';

@Controller('analyze')
export class AnalyzeController {
  constructor(private readonly analyzeService: AnalyzeService) {}

  @Post(':userHandle/:queryHash')
  scrapeAndAnalyzeProfile(@Param('userHandle') userHandle: string, @Param('queryHash') queryHash: string): any {
    return this.analyzeService.scrapeAndAnalyzeProfile(userHandle, queryHash);
  }
}
