import { MoonStar, Sun } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { useTheme } from '~/hooks';

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="outline" onClick={toggleTheme}>
      {theme === 'light' ? (
        <MoonStar className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  );
};
