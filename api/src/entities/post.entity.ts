import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

import { Profile } from './profile.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  instShortCode: string;

  @Column({ nullable: true })
  postText: string;

  @Column()
  @IsNotEmpty()
  displayUrl: string;

  @Column()
  @IsNotEmpty()
  thumbnailUrl: string;

  @Column({ default: 0 })
  totalLikes: number;

  @Column({ default: 0 })
  totalComments: number;

  @Column({ default: false })
  isVideo: boolean;

  @Column({ nullable: true })
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
