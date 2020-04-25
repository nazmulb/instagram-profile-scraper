import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

import { Profile } from './profile.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsNotEmpty()
  instShortCode: string;

  @Column({ type: 'text', charset: "utf8mb4", collation: "utf8mb4_unicode_ci", nullable: true })
  postText: string;

  @Column({ type: 'text' })
  @IsNotEmpty()
  displayUrl: string;

  @Column({ type: 'text' })
  @IsNotEmpty()
  thumbnailUrl: string;

  @Column({ default: 0 })
  totalLikes: number;

  @Column({ default: 0 })
  totalComments: number;

  @Column({ default: false })
  isVideo: boolean;

  @Column({ type: 'text', nullable: true })
  videoUrl: string;

  @Column({ default: 0 })
  videoViewCount: number;

  @Column({ default: 0 })
  takenAtTimestamp: number;

  @ManyToOne(
    type => Profile,
    profile => profile.posts,
  )
  profile: Profile;
}
