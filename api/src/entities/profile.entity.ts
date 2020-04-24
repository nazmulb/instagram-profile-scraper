import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

import { Post } from './post.entity';
import { Brand } from './brand.entity';
import { Interest } from './interest.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint' })
  @IsNotEmpty()
  instProfileId: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  username: string;

  @Column({ type: 'text', nullable: true })
  profilePicUrl: string;

  @Column({ default: 0 })
  followers: number;

  @Column({ default: 0 })
  following: number;

  @Column({ default: 0 })
  engagements: number;

  @Column({ default: 0 })
  engagementRate: number;

  @Column({ default: 0 })
  avgLikes: number;

  @Column({ type: 'text', nullable: true })
  popularHashtags: string;

  @Column({ type: 'text', nullable: true })
  popularMentions: string;

  @OneToMany(
    type => Post,
    post => post.profile,
  )
  posts: Post[];

  @OneToMany(
    type => Brand,
    brand => brand.profile,
  )
  brands: Brand[];

  @OneToMany(
    type => Interest,
    interest => interest.profile,
  )
  interests: Interest[];
}
