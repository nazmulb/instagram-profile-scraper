export interface Count {
  count?: number;
}

export interface PageInfo {
  has_next_page?: boolean;
  end_cursor?: string;
}

export interface PostText {
  text?: string;
}

export interface PostsText {
  node?: PostText;
}

export interface MediaCaption {
  edges?: PostsText[];
}

export interface Post {
  id?: number;
  shortcode?: string;
  display_url?: string;
  thumbnail_src?: string;
  is_video?: boolean;
  edge_media_to_comment?: Count;
  edge_media_preview_like?: Count;
  video_view_count?: number;
  taken_at_timestamp?: number;
  videoUrl?: string;
  edge_media_to_caption?: MediaCaption;
}

export interface Posts {
  node?: Post;
}

export interface TimelineMedia {
  count?: number;
  page_info?: PageInfo;
  edges?: Posts[];
}

export interface InstagramProfile {
  id?: number;
  full_name?: string;
  username?: string;
  profile_pic_url?: string;
  edge_followed_by?: Count;
  edge_follow?: Count;
  edge_owner_to_timeline_media?: TimelineMedia;
}
