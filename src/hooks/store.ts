import { useFirestore } from 'hooks/firebase';
import { useAuth } from 'hooks/auth';
import { useExercisesSetter } from 'hooks/exercises/setter';

import { ExerciseFields, ExerciseForm, Exercise } from 'types/exercises';

export const useStore = () => {
  const { addExerciseToState } = useExercisesSetter();
  const {
    addExerciseToFirestore,
    getUserExercisesFromFirestore
  } = useFirestore();
  const { userID } = useAuth();

  const addExercise = async (form: ExerciseForm) => {
    const exercise: ExerciseFields = {
      title: form.title,
      description: form.description,
      muscles: form.muscles,
      userID: userID
    };

    // Add in the server
    // const doc = await addExerciseToFirestore(exercise);

    addExerciseToState({
      id: '1341324',
      title: exercise.title,
      description: exercise.description,
      userID: exercise.userID,
      muscles: exercise.muscles
    });

    // console.log(doc);
  };

  const getUserExercises = async () => {
    await getUserExercisesFromFirestore(userID);
  };

  return {
    addExercise,
    getUserExercises
  };
};
