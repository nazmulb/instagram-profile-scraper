import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { ProfileRepository } from '../repositories/profile.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileRepository])],
  controllers: [ProfilesController],
  providers: [ProfilesService],
})
export class ProfilesModule {}
