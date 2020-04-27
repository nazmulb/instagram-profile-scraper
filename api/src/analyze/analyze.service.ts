import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from '../axios';
import {
  ProfileRepository,
  PostRepository,
  BrandRepository,
  InterestRepository,
} from '../repositories';
import { Profile, Post, Brand, Interest } from '../entities';
import { Instagram } from '../interfaces';
import { GoogleCloudApi, Util } from '../libraries';
import { encode } from 'punycode';

@Injectable()
export class AnalyzeService {
  constructor(
    private readonly profileRepository: ProfileRepository,
    private readonly postRepository: PostRepository,
    private readonly brandRepository: BrandRepository,
    private readonly interestRepository: InterestRepository,
  ) {}

  async scrapeAndAnalyzeProfile(userHandle: string): Promise<object> {
    const profileData: Instagram.Profile = await this.scrapeProfile(userHandle);

    if (profileData) {
      let profile: Profile = await this.profileRepository.getProfileByUsername(
        profileData.username,
      );

      if (profile) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error:
              'A profile with the given username or instagram id already exists.',
          },
          HttpStatus.BAD_REQUEST,
        );
      } else {
        try {
          const analyze = {
            totalPost: profileData.edge_owner_to_timeline_media.count,
            totalFollowers: profileData.edge_followed_by.count,
            totalLikes: 0,
            totalComments: 0,
            engagements: 0,
            engagementRate: 0,
            avgLikes: 0,
            popularHashtags: new Map<string, number>(),
            popularMentions: new Map<string, number>(),
            allPostText: '',
          };

          profile = new Profile();
          profile.name = profileData.full_name;
          profile.username = profileData.username;
          profile.instProfileId = profileData.id;
          profile.profilePicUrl = profileData.profile_pic_url;
          profile.followers = profileData.edge_followed_by.count;
          profile.following = profileData.edge_follow.count;
          profile = await this.profileRepository.save(profile);

          let postCount = 0;
          for (const key in profileData.edge_owner_to_timeline_media.edges) {
            if (
              profileData.edge_owner_to_timeline_media.edges.hasOwnProperty(key)
            ) {
              postCount++;
              const iposts: Instagram.Posts =
                profileData.edge_owner_to_timeline_media.edges[key];

              const postText =
                iposts.node.edge_media_to_caption.edges.length > 0
                  ? iposts.node.edge_media_to_caption.edges[0].node.text
                  : '';

              analyze.totalLikes += iposts.node.edge_media_preview_like.count;
              analyze.totalComments += iposts.node.edge_media_to_comment.count;
              analyze.allPostText += postText;

              Util.getHashTagsOrMentions(postText, analyze.popularHashtags);
              Util.getHashTagsOrMentions(
                postText,
                analyze.popularMentions,
                true,
              );

              // save only first 3 posts into database
              if (postCount <= 3) {
                const post: Post = new Post();
                post.profile = profile;
                post.instShortCode = iposts.node.shortcode;
                post.displayUrl = iposts.node.display_url;
                post.isVideo = iposts.node.is_video;
                post.takenAtTimestamp = iposts.node.taken_at_timestamp;
                post.thumbnailUrl = iposts.node.thumbnail_src;
                post.totalLikes = iposts.node.edge_media_preview_like.count;
                post.totalComments = iposts.node.edge_media_to_comment.count;
                post.postText = encode(postText);

                if (post.isVideo) {
                  const postVideoData: Instagram.Post = await this.scrapeVideoInfoFromPost(
                    post.instShortCode,
                  );

                  if (postVideoData) {
                    post.videoUrl = postVideoData.video_url;
                    post.videoViewCount = postVideoData.video_view_count;
                  }
                }

                await this.postRepository.save(post);
              }
            }
          }

          analyze.engagements = analyze.totalLikes + analyze.totalComments;
          analyze.engagementRate =
            analyze.engagements > 0
              ? analyze.engagements / analyze.totalFollowers
              : 0;

          analyze.avgLikes =
            analyze.totalLikes > 0 ? analyze.totalLikes / analyze.totalPost : 0;

          profile.engagements = analyze.engagements;
          profile.engagementRate = analyze.engagementRate;
          profile.avgLikes = analyze.avgLikes;

          const hashtags = Util.getSortedArrayFromMap(analyze.popularHashtags);
          profile.popularHashtags = hashtags.slice(0, 5).join('|');

          const mentions = Util.getSortedArrayFromMap(analyze.popularMentions);
          profile.popularMentions = mentions.slice(0, 5).join('|');

          if (analyze.allPostText && analyze.allPostText.length > 0) {
            const dataBrandAndInt = await GoogleCloudApi.getBrandAffinityAndInterests(
              analyze.allPostText,
            );

            // console.log(analyze.allPostText);
            // console.dir(dataBrandAndInt);

            const brand: Brand = new Brand();
            brand.profile = profile;
            brand.name = 'Apple';
            brand.sentimentRatio = 16.51;
            await this.brandRepository.save(brand);

            const interest: Interest = new Interest();
            interest.profile = profile;
            interest.topic = 'Camera & photography';
            interest.interestRatio = 49.84;
            await this.interestRepository.save(interest);
          }

          await this.profileRepository.save(profile);
          return {
            message: `The Instagram profile of ${profile.name} is scraped and analyzed successfully.`,
          };
        } catch (e) {
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              error: 'Something went wrong.',
            },
            HttpStatus.BAD_REQUEST,
          );
        }
      }
    }

    return profileData;
  }

  /**
   * To scrape Instagram profile
   * @param {string} userHandle - user handle
   * @returns {Promise<any>}
   */
  private async scrapeProfile(userHandle: string): Promise<any> {
    return await axios
      .get(`/${userHandle}/?__a=1`)
      .then(res => res.data.graphql.user)
      .catch(_ => {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Profile not found.',
          },
          HttpStatus.NOT_FOUND,
        );
      });
  }

  /**
   * To scrape Instagram video info from a post
   * @param {string} postShortCode - post short code
   * @returns {Promise<any>}
   */
  private async scrapeVideoInfoFromPost(postShortCode: string): Promise<any> {
    return await axios
      .get(`/p/${postShortCode}/?__a=1`)
      .then(res => res.data.graphql.shortcode_media)
      .catch(_ => {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Post not found.',
          },
          HttpStatus.NOT_FOUND,
        );
      });
  }
}
