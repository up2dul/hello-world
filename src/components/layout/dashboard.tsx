import { Header } from './header';

export const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <section className="pt-24 px-4 md:px-10 lg:px-20">{children}</section>
    </>
  );
};
