import { Controller, Get, Param } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { Profile } from '../entities/profile.entity';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get()
  getProfiles(): Promise<Profile[]> {
    return this.profilesService.getProfiles();
  }

  @Get(':id')
  getProfile(@Param('id') id: number): Promise<Profile> {
    return this.profilesService.getProfile(id);
  }
}
