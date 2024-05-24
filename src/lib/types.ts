export type User = {
  role: 'admin' | 'guest';
  email: string;
  password: string;
  name: string;
  imgUrl: string;
  accessToken: string;
};

export type Ticket = {
  id: string;
  title: string;
  customerName: string;
  imgUrl: string;
  priority: 'high' | 'normal' | 'low';
  createdAt: string;
  updatedAt: string;
  assignee: string;
};
