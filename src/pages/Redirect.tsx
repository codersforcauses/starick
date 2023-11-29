import { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    window.location.href = 'https://www.google.com';
  }, []);

  return null;
};

export default RedirectPage;