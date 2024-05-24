import { MenuNav, ThemeButton, UserNav } from '~/components/common';

export const Header = () => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4 md:px-10 lg:px-20">
        <MenuNav />

        <div className="flex items-center gap-2 lg:gap-6">
          <UserNav />
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
};
