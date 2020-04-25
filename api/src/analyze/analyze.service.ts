import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ProfileRepository } from '../repositories/profile.repository';
import { Profile } from '../entities/profile.entity';
import { InstagramProfile } from '../interfaces/instagram-profile.interface';
import axios from '../axios';

@Injectable()
export class AnalyzeService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async scrapeAndAnalyzeProfile(
    userHandle: string,
    queryHash: string,
  ): Promise<any> {
    const profileData: InstagramProfile = await this.scrapeProfile(userHandle);

    console.log(
      profileData.edge_owner_to_timeline_media.edges[0].node.edge_media_to_caption.edges[0].node.text,
    );
    return;

    if (profileData) {
      let profile = await this.profileRepository.getProfileByUsername(
        profileData.username,
      );

      if (!profile) profile = new Profile();
      profile.name = profileData.full_name;
      profile.username = profileData.username;
      profile.instProfileId = profileData.id;
      profile.profilePicUrl = profileData.profile_pic_url;
      profile.followers = profileData.edge_followed_by.count;
      profile.following = profileData.edge_follow.count;

      try {
        profile = await this.profileRepository.save(profile);
      } catch (_) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error:
              'A profile with the given username or instagram id already exists.',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    return profileData;
  }

  private async scrapeProfile(userHandle: string): Promise<any> {
    return await axios
      .get(`/${userHandle}/?__a=1`)
      .then(res => res.data.graphql.user)
      .catch(_ => {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Profile not found',
          },
          HttpStatus.NOT_FOUND,
        );
      });
  }
}
