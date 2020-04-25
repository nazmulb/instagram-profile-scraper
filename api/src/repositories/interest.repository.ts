import { Repository, EntityRepository } from 'typeorm';
import { Interest } from '../entities/interest.entity';

@EntityRepository(Interest)
export class InterestRepository extends Repository<Interest> {}
