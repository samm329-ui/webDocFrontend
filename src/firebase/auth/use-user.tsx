'use client';
import {useEffect, useState} from 'react';
import {type User, onAuthStateChanged} from 'firebase/auth';

import {useAuth} from '@/firebase/provider';

// This hook is used to get the current user.
// It returns the user object if the user is authenticated, and null otherwise.
// It also returns a boolean to indicate if the user is loading.
export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = useAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  return {user, isLoading};
};
