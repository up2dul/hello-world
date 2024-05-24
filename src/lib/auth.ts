import { omit } from 'radash';

import { AccessToken, USER } from './constant';
import type { User } from './types';

function getToken() {
  return localStorage.getItem('accessToken');
}

export function getIsLoggedIn() {
  const token = getToken();
  return token === AccessToken.ADMIN || token === AccessToken.GUEST;
}

export function getUserData(): User | null {
  const token = getToken();
  return Object.values(USER).find(user => user.accessToken === token) || null;
}

function setUserData(user: User) {
  const userData = omit(user, ['accessToken', 'password']);
  localStorage.setItem('accessToken', user.accessToken);
  localStorage.setItem('userData', JSON.stringify(userData));
}

// login function with fake loading Promise
export async function login({
  email,
  password,
}: { email: string; password: string }) {
  try {
    await new Promise(resolve => setTimeout(resolve, 800)); // fake loading

    const user = Object.values(USER).find(user => user.email === email);
    if (!user) {
      throw Error(`User with email ${email} not found`);
    }
    if (user.password !== password) {
      throw Error('Invalid password');
    }

    localStorage.setItem('accessToken', user.accessToken);
    setUserData(user);
    return user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export async function logout() {
  await new Promise(resolve => setTimeout(resolve, 800)); // fake loading
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userData');
}
