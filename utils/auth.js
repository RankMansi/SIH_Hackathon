// utils/auth.js
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

export function useAuth() {
  const router = useRouter();

  // Replace this with your authentication logic (e.g., checking a token or session)
  const isAuthenticated = true; // Set to true if the user is authenticated

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to the login page if not authenticated
      router.push('/signup');
    }
  }, [isAuthenticated]);

  return isAuthenticated;
}
