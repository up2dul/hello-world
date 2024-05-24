import type { Path } from '~/router';

// fake access token
export enum AccessToken {
  ADMIN = 'a123456',
  GUEST = 'g123456',
}

export enum Role {
  ADMIN = 'admin',
  GUEST = 'guest',
}

export const PATH: Record<string, Path[]> = {
  PRIVATE: ['/overview', '/tickets'],
  PUBLIC: ['/login'],
};
