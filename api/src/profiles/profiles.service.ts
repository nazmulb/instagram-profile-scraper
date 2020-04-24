import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfilesService {
    getProfiles(): string {
        return "Show all profiles";
    }

    getProfile(id: number): string {
        return `Show profile by if: ${id}`;
    }
}
