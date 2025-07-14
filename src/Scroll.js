import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Reset scroll *immediately*
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto', // no animation or smooth delay
      });
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
