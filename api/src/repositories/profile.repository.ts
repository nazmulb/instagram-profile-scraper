import { Repository, EntityRepository } from 'typeorm';
import { Profile } from '../entities/profile.entity';

@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile> {
  async getProfile(id: number): Promise<Profile> {
    return await this.createQueryBuilder('profile')
      .leftJoinAndSelect('profile.posts', 'post')
      .leftJoinAndSelect('profile.brands', 'brand')
      .leftJoinAndSelect('profile.interests', 'interest')
      .where('profile.id = :id', { id })
      .getOne();
  }
}
