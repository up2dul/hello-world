export type User = {
  role: 'admin' | 'guest';
  email: string;
  password: string;
  name: string;
  imgUrl: string;
  accessToken: string;
};
