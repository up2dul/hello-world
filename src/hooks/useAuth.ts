import { useEffect, useState } from 'react';

import { ACCESS_TOKEN } from '~/lib/constant';

export function useAuth() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken === ACCESS_TOKEN) {
      setActive(true);
    }
  }, []);

  return { active };
}
