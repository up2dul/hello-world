import type { Path } from '~/router';
import type { User } from './types';

// fake access token
export enum AccessToken {
  ADMIN = 'a123456',
  GUEST = 'g123456',
}

export enum Role {
  ADMIN = 'admin',
  GUEST = 'guest',
}

export const USER: Record<Role, User> = {
  [Role.ADMIN]: {
    role: Role.ADMIN,
    email: 'admin@gmail.com',
    password: 'adminadmin',
    name: 'Abdul',
    imgUrl: 'https://api.dicebear.com/8.x/thumbs/svg?seed=Misty',
    accessToken: AccessToken.ADMIN,
  },
  [Role.GUEST]: {
    role: Role.GUEST,
    email: 'guest@gmail.com',
    password: 'guestguest',
    name: 'Malik',
    imgUrl: 'https://api.dicebear.com/8.x/thumbs/svg?seed=Casper',
    accessToken: AccessToken.GUEST,
  },
};

export const PATH: Record<string, Path[]> = {
  PRIVATE: ['/'],
  PUBLIC: ['/login'],
};
