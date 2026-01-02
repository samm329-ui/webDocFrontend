'use client';

import React, {createContext, useContext} from 'react';
import type {FirebaseApp} from 'firebase/app';
import type {Auth}s from 'firebase/auth';
import type {Firestore} from 'firebase/firestore';
import {FirebaseErrorListener} from '@/components/FirebaseErrorListener';

// The context for the Firebase services.
// It is used to provide the services to the components.
// It is not intended to be used directly by the components.
// The components should use the hooks to access the services.
const FirebaseContext = createContext<{
  app: FirebaseApp;
  auth: Auth;
firestore: Firestore;
} | null>(null);

type Props = {
  children: React.ReactNode;
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
};

// This provider is responsible for providing the Firebase services to the components.
// It should be used as a wrapper around the root layout of the application.
export function FirebaseProvider({children, app, auth, firestore}: Props) {
  return (
    <FirebaseContext.Provider value={{app, auth, firestore}}>
      <FirebaseErrorListener />
      {children}
    </FirebaseContext.Provider>
  );
}

// This hook is used to access the Firebase context.
// It should be used by the other hooks to access the Firebase services.
// It is not intended to be used directly by the components.
export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};

// The following hooks are used to access the Firebase services.
// They should be used by the components to access the services.
export const useFirebaseApp = () => useFirebase().app;
export const useFirestore = () => useFirebase().firestore;
export const useAuth = () => useFirebase().auth;
