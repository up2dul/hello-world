import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '~/hooks';
import { PATH } from '~/lib/constant';
import type { Path } from '~/router';

export const Redirects = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const { pathname } = useLocation();

  const authenticated = auth.active && PATH.PUBLIC.includes(pathname as Path);
  const unauthenticated =
    !auth.active && PATH.PRIVATE.includes(pathname as Path);

  if (authenticated) return <Navigate to="/" replace />;
  if (unauthenticated) return <Navigate to="/login" replace />;

  return children;
};
