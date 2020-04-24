import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyzeService {
    scrapeAndAnalyzeProfile(userHandle: string): string {
        return `Scrape And Analyze: ${userHandle}`;
    }
}
