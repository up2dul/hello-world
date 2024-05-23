import { Header } from './header';

export const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      {children}
    </>
  );
};
