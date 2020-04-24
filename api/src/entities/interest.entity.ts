import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

import { Profile } from './profile.entity';

@Entity()
export class Interest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  topic: string;

  @Column({ type: 'float', default: 0 })
  interestRatio: number;

  @ManyToOne(
    type => Profile,
    profile => profile.interests,
  )
  profile: Profile;
}
