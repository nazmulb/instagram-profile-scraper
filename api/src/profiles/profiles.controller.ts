import { Controller, Get, Param } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get()
  getProfiles(): string {
    return this.profilesService.getProfiles();
  }

  @Get(':id')
  getProfile(@Param('id') id: number): string {
    return this.profilesService.getProfile(id);
  }
}
