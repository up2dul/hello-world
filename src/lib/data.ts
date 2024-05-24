import { random, uid } from 'radash';

import { AccessToken } from './constant';
import type { Ticket, User } from './types';

export const users: User[] = [
  {
    role: 'admin',
    email: 'admin@gmail.com',
    password: 'adminadmin',
    name: 'Abdul',
    imgUrl: 'https://api.dicebear.com/8.x/thumbs/svg?seed=Misty',
    accessToken: AccessToken.ADMIN,
  },
  {
    role: 'guest',
    email: 'guest@gmail.com',
    password: 'guestguest',
    name: 'Malik',
    imgUrl: 'https://api.dicebear.com/8.x/thumbs/svg?seed=Casper',
    accessToken: AccessToken.GUEST,
  },
];

export const overviewChartsData = [
  {
    name: 'Jan',
    total: random(1, 180),
  },
  {
    name: 'Feb',
    total: random(1, 180),
  },
  {
    name: 'Mar',
    total: random(1, 180),
  },
  {
    name: 'Apr',
    total: random(1, 180),
  },
  {
    name: 'May',
    total: random(1, 180),
  },
  {
    name: 'Jun',
    total: random(1, 180),
  },
  {
    name: 'Jul',
    total: random(1, 180),
  },
  {
    name: 'Aug',
    total: random(1, 180),
  },
  {
    name: 'Sep',
    total: random(1, 180),
  },
  {
    name: 'Oct',
    total: random(1, 180),
  },
  {
    name: 'Nov',
    total: random(1, 180),
  },
  {
    name: 'Dec',
    total: random(1, 180),
  },
];

export const ticketsData: Omit<Ticket, 'assignee'>[] = [
  {
    id: uid(4),
    title: 'Contact email not linked',
    customerName: 'John Doe',
    imgUrl: 'https://api.dicebear.com/8.x/thumbs/svg?seed=Callie',
    priority: 'high',
    createdAt: '2024-05-24T01:28:06+0700',
    updatedAt: '2024-05-24T01:28:06+0700',
  },
  {
    id: uid(4),
    title: 'Unable to login',
    customerName: 'Jane Doe',
    imgUrl: 'https://api.dicebear.com/8.x/thumbs/svg?seed=Callie',
    priority: 'normal',
    createdAt: '2024-02-24T01:28:06+0700',
    updatedAt: '2024-02-24T01:28:06+0700',
  },
  {
    id: uid(4),
    title: 'How do I reset my password?',
    customerName: 'Bob Smith',
    imgUrl: 'https://api.dicebear.com/8.x/thumbs/svg?seed=Callie',
    priority: 'low',
    createdAt: '2024-01-24T01:28:06+0700',
    updatedAt: '2024-01-24T01:28:06+0700',
  },
];
