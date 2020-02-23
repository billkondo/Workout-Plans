import { useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from 'config/firebase';

import { useAuth } from 'hooks/auth';

import { Exercise, ExerciseFields } from 'types/exercises';

export const useFirebase = () => {
  const { setUserData, resetUserData } = useAuth();

  // Initialize firebase
  useEffect(() => {
    console.log('init firebase');
    firebase.initializeApp(firebaseConfig);
  }, []);

  // Authentication observable
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in
        console.log('sign in', user);
        setUserData(user.uid, user.email);
      } else {
        // User is signed out
        console.log('sign out');
        resetUserData();
      }
    });
  }, [resetUserData, setUserData]);
};

export const useFirebaseMethods = () => {
  const loginWithFirebase = async (email: string, password: string) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const logoutWithFirebase = async () => {
    await firebase.auth().signOut();
  };

  return { loginWithFirebase, logoutWithFirebase };
};

export const useFirestore = () => {
  const db = firebase.firestore();

  const collections = {
    exercises: 'exercises'
  };

  const addExerciseToFirestore = async (
    exercise: ExerciseFields
  ): Promise<Exercise> => {
    const timestamp = firebase.firestore.Timestamp.now();

    const docRef = await db.collection(collections.exercises).add({
      ...exercise,
      createdAt: timestamp
    });

    return {
      id: docRef.id,
      title: exercise.title,
      description: exercise.description,
      muscles: exercise.muscles,
      userID: exercise.userID,
      createdTime: timestamp
    };
  };

  const getUserExercisesFromFirestore = async (userID: string) => {
    const x = await db
      .collection(collections.exercises)
      .where('userID', '==', userID)
      .get();

    console.log(x);
  };

  return {
    addExerciseToFirestore,
    getUserExercisesFromFirestore
  };
};
