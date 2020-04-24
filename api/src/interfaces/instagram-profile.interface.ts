interface FollowedOrFollow {
  count?: number;
}

export default interface InstagramProfile {
  id?: number;
  full_name?: string;
  username?: string;
  profile_pic_url?: string;
  edge_followed_by?: FollowedOrFollow;
  edge_follow?: FollowedOrFollow;
}
