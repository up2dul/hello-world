import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '~/components/ui/navigation-menu';
import { Link } from '~/router';

export const MenuNav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-2 lg:gap-6 xl:gap-8">
        <NavigationMenuItem>
          <Link to="/overview">Overview</Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/tickets">Tickets</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
