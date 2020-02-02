import React, { useState } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';

import ExerciseSelectorComponent from 'components/exercise_selector/ExerciseSelector';

import { Exercise, ExerciseOption } from 'types/exercises';

type Props = {
  addExerciseOption: (exercise: Exercise) => void;
  removeExerciseOption: (exercise: Exercise) => void;
  exercisesOptions: ExerciseOption[];
  editExerciseOptionInfo: (
    key: string,
    value: number | number[],
    exercise: Exercise
  ) => void;
};

const ExerciesSelector: React.FC<Props> = ({
  addExerciseOption,
  removeExerciseOption,
  exercisesOptions,
  editExerciseOptionInfo
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ExerciseSelectorComponent
        selectedExercisesOptions={exercisesOptions}
        selectExerciseOption={addExerciseOption}
        unselectExerciseOption={removeExerciseOption}
        editOption={editExerciseOptionInfo}
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
