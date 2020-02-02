import { useFirestore } from 'hooks/firebase';
import { useAuth } from 'hooks/auth';
import { useExercisesSetter } from 'hooks/exercises/setter';
import { useTrainingsSetter } from 'hooks/trainings/setter';

// ! temporary
import uuidv4 from 'uuid/v4';

import { ExerciseFields, ExerciseForm, Exercise } from 'types/exercises';
import { Training, TrainingForm, TrainingFields } from 'types/training';

export const useStore = () => {
  const {
    addExerciseToState,
    editExerciseFromState,
    deleteExerciseFromState
  } = useExercisesSetter();
  const {
    addTrainingToState,
    deleteTrainingFromState,
    editTrainingFromState
  } = useTrainingsSetter();
  const {
    addExerciseToFirestore,
    getUserExercisesFromFirestore
  } = useFirestore();
  const { userID } = useAuth();

  const timeout = (ms: number) =>
    new Promise(resolve => {
      setTimeout(() => resolve(), ms);
    });

  const addExercise = async (form: ExerciseForm) => {
    const exercise: ExerciseFields = {
      title: form.title,
      description: form.description,
      muscles: form.muscles,
      userID: userID
    };

    // TODO Add in the server
    await timeout(2000);
    // const doc = await addExerciseToFirestore(exercise);

    addExerciseToState({
      id: uuidv4(),
      title: exercise.title,
      description: exercise.description,
      userID: exercise.userID,
      muscles: exercise.muscles
    });

    // console.log(doc);
  };

  const editExercise = async (exercise: Exercise, form: ExerciseForm) => {
    // TODO do call to firestore
    await timeout(2000);

    editExerciseFromState({
      ...exercise,
      ...form
    });
  };

  const deleteExercise = async (exercise: Exercise) => {
    // TODO do call to firestore
    await timeout(2000);

    deleteExerciseFromState(exercise);
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

    await timeout(2000);

    addTrainingToState({
      ...training,
      id: uuidv4()
    });
  };

  const deleteTraining = async (training: Training) => {
    // TODO call firebase
    await timeout(2000);

    deleteTrainingFromState(training);
  };

  const editTraining = async (training: Training, form: TrainingForm) => {
    // TODO call firebase
    await timeout(2000);

    editTrainingFromState({
      ...training,
      ...form
    });
  };

  return {
    addExercise,
    editExercise,
    deleteExercise,
    getUserExercises,
    addTraining,
    deleteTraining,
    editTraining
  };
};
