import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

import { Profile } from './profile.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column({ type: 'float', default: 0 })
  sentimentRatio: number;

  @ManyToOne(
    type => Profile,
    profile => profile.brands,
  )
  profile: Profile;
}
