'use client';

import {useEffect, useState} from 'react';

import {FirebaseProvider} from '@/firebase/provider';
import {initializeFirebase} from '@/firebase';
import type {FirebaseApp} from 'firebase/app';
import type {Auth} from 'firebase/auth';
import type {Firestore} from 'firebase/firestore';

type Props = {
  children: React.ReactNode;
};

// This provider is responsible for initializing Firebase on the client side.
// It should be used as a wrapper around the root layout of the application.
// It ensures that Firebase is initialized only once and that the services are
// available to all components.
export function FirebaseClientProvider({children}: Props) {
  const [firebase, setFirebase] = useState<{
    app: FirebaseApp;
    auth: Auth;
    firestore: Firestore;
  } | null>(null);

  useEffect(() => {
    const {app, auth, firestore} = initializeFirebase();
    setFirebase({app, auth, firestore});
  }, []);

  if (!firebase) {
    // TODO: Add a loading spinner
    return null;
  }

  return (
    <FirebaseProvider
      app={firebase.app}
      auth={firebase.auth}
      firestore={firebase.firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
