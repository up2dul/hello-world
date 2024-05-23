import { Navigate, useLocation } from 'react-router-dom';

import { getIsLoggedIn } from '~/lib/auth';
import { PATH } from '~/lib/constant';
import type { Path } from '~/router';

export const Redirects = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  const isLoggedIn = getIsLoggedIn();

  const authenticated = isLoggedIn && PATH.PUBLIC.includes(pathname as Path);
  const unauthenticated =
    !isLoggedIn && PATH.PRIVATE.includes(pathname as Path);

  if (authenticated) return <Navigate to="/" replace />;
  if (unauthenticated) return <Navigate to="/login" replace />;

  return children;
};
