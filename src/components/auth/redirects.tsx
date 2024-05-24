import { useLocation } from 'react-router-dom';

import { getIsLoggedIn, getUserData } from '~/lib/auth';
import { PATH } from '~/lib/constant';
import { Navigate, type Path } from '~/router';

export const Redirects = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  const isLoggedIn = getIsLoggedIn();
  const user = getUserData();
  const isPathIndex = pathname === '/';

  const authenticated =
    (isLoggedIn && PATH.PUBLIC.includes(pathname as Path)) || isPathIndex;
  const unauthenticated =
    (!isLoggedIn && PATH.PRIVATE.includes(pathname as Path)) || isPathIndex;

  if (authenticated) {
    if (user?.role === 'admin') return <Navigate to="/overview" replace />;
    return <Navigate to="/tickets" replace />;
  }
  if (unauthenticated) return <Navigate to="/login" replace />;

  return children;
};
