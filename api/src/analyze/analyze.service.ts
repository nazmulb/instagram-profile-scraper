import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ProfileRepository } from '../repositories/profile.repository';
import { Profile } from '../entities/profile.entity';
import InstagramProfile from '../interfaces/instagram-profile.interface';
import axios from '../axios';

@Injectable()
export class AnalyzeService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async scrapeAndAnalyzeProfile(
    userHandle: string,
    queryHash: string,
  ): Promise<any> {
    const profileDate: InstagramProfile = await this.scrapeProfile(userHandle);

    if (profileDate) {
      let profile = await this.profileRepository.getProfileByUsername(
        profileDate.username,
      );

      if (!profile) profile = new Profile();
      profile.name = profileDate.full_name;
      profile.username = profileDate.username;
      profile.instProfileId = profileDate.id;
      profile.profilePicUrl = profileDate.profile_pic_url;
      profile.followers = profileDate.edge_followed_by.count;
      profile.following = profileDate.edge_follow.count;
      await this.profileRepository.save(profile);
    }

    return profileDate;
  }

  private async scrapeProfile(userHandle: string): Promise<any> {
    return await axios
      .get(`/${userHandle}/?__a=1`)
      .then(res => res.data.graphql.user)
      .catch(_ => {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Profile not found',
          },
          HttpStatus.BAD_REQUEST,
        );
      });
  }
}
