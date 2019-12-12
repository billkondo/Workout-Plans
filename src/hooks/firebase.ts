import { useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from 'config/firebase';

import { useAuth } from 'hooks/auth';

const useFirebase = () => {
  const { setAuth } = useAuth();

  // Initialize firebase
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  // Authentication observable
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in
        console.log('sign in', user);
        setAuth(true);
      } else {
        // User is signed out
        console.log('sign out');
        setAuth(false);
      }
    });
  }, []);
};

const useFirebaseMethods = () => {
  const loginWithFirebase = async (email: string, password: string) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const logoutWithFirebase = async () => {
    await firebase.auth().signOut();
  };

  return { loginWithFirebase, logoutWithFirebase };
};

export { useFirebase, useFirebaseMethods };
