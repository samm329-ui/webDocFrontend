import {initializeApp, getApps, type FirebaseApp} from 'firebase/app';
import {getAuth, type Auth} from 'firebase/auth';
import {getFirestore, type Firestore} from 'firebase/firestore';
import {firebaseConfig} from './config';

export {
  FirebaseProvider,
  FirebaseClientProvider,
  useFirebase,
  useFirebaseApp,
  useFirestore,
  useAuth,
} from './provider';

export {useUser} from './auth/use-user';
export {useMemoFirebase} from './use-memo-firebase';

let firebaseApp: FirebaseApp;

// This function is used to initialize the Firebase app.
// It is important to call this function only once.
// It checks if the app is already initialized and if not, it initializes it.
// It returns the Firebase app, auth and firestore instances.
export const initializeFirebase = () => {
  const apps = getApps();
  if (!apps.length) {
    firebaseApp = initializeApp(firebaseConfig);
  } else {
    firebaseApp = apps[0];
  }

  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);

  return {app: firebaseApp, auth, firestore};
};
