import React, { useState, useContext } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';

import ExerciseSelectorComponent from 'components/exercise_selector/ExerciseSelector';
import { BuildTrainingContext } from './TrainingsCreate';
import { Exercise } from 'types/exercises';

const ExerciesSelector = () => {
  const [isOpen, setOpen] = useState(false);
  const context = useContext(BuildTrainingContext);

  if (!context) return null;

  const selectExerciseOption = (exercise: Exercise) =>
    context.addExerciseOption(exercise);

  const unselectExerciseOption = (exercise: Exercise) =>
    context.removeExerciseOption(exercise);

  const editOption = (
    key: string,
    value: number | number[],
    exercise: Exercise
  ) => context.editExerciseOptionInfo(key, value, exercise);

  return (
    <React.Fragment>
      <ExerciseSelectorComponent
        selectedExercisesOptions={context.exerciseOptions}
        selectExerciseOption={selectExerciseOption}
        unselectExerciseOption={unselectExerciseOption}
        editOption={editOption}
        isOpen={isOpen}
        closeSelector={() => setOpen(false)}
      />

      <IonCard onClick={() => setOpen(true)}>
        <IonCardHeader>
          <IonCardTitle className="ion-padding">
            Escolher exercícios
          </IonCardTitle>
          <IonCardSubtitle className="ion-padding">
            Quais exercícios, séries e repetições haverá em seu treino
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </React.Fragment>
  );
};

export default ExerciesSelector;
