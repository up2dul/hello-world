import type { Path } from '~/router';

export const ACCESS_TOKEN = 'a123456'; // fake access token

export const USER = {
  ADMIN: {
    EMAIL: 'admin@up2dul.dev',
    PASSWORD: 'admin123',
  },
  GUEST: {
    EMAIL: 'guest@up2dul.dev',
    PASSWORD: 'guest123',
  },
};

export const PATH: Record<string, Path[]> = {
  PRIVATE: ['/'],
  PUBLIC: ['/login'],
};
