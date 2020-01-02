import { useFirestore } from 'hooks/firebase';
import { useAuth } from 'hooks/auth';
import { useExercisesSetter } from 'hooks/exercises/setter';
import { useTrainingSetter } from 'hooks/training/setter';

import { ExerciseFields, ExerciseForm, Exercise } from 'types/exercises';
import { Training, TrainingForm, TrainingFields } from 'types/training';

export const useStore = () => {
  const { addExerciseToState } = useExercisesSetter();
  const { addTrainingToState } = useTrainingSetter();
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

  const addTraining = async (form: TrainingForm) => {
    const training: TrainingFields = {
      muscles: form.muscles,
      dates: form.dates,
      exerciseOptions: form.exerciseOptions,
      userID: userID
    };

    addTrainingToState({
      ...training,
      id: '1234'
    });
  };

  return {
    addExercise,
    getUserExercises,
    addTraining
  };
};
