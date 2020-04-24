import { Injectable } from '@nestjs/common';
import { ProfileRepository } from '../repositories/profile.repository';
import { Profile } from '../entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async getProfiles(): Promise<Profile[]> {
    const profiles: Profile[] = await this.profileRepository.find();
    return profiles;
  }

  async getProfile(id: number): Promise<Profile> {
    const profile: Profile = await this.profileRepository.getProfile(id);
    return profile;
  }
}
