import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

import ExerciseCard from './ExerciseCard';

import { ExerciseOption, Exercise } from 'types/exercises';

import { useExercisesGetter } from 'hooks/exercises/getter';

type Props = {
  selectExerciseOption: (exercise: Exercise) => void;
  unselectExerciseOption: (exercise: Exercise) => void;
  selectedExercisesOptions: Array<ExerciseOption>;
  editOption: (
    key: string,
    value: number | number[],
    exercise: Exercise
  ) => void;
};

const ExerciseSelector: React.FC<Props> = ({
  selectExerciseOption,
  unselectExerciseOption,
  selectedExercisesOptions,
  editOption
}) => {
  const { exercises } = useExercisesGetter();

  const findExerciseOption = (exercise: Exercise) =>
    selectedExercisesOptions.find(e => e.exercise.id === exercise.id);

  return (
    <IonGrid>
      {exercises.map(e => {
        return (
          <IonRow key={e.id}>
            <IonCol>
              <ExerciseCard
                selectExerciseOption={selectExerciseOption}
                unselectExerciseOption={unselectExerciseOption}
                exercise={e}
                exerciseOption={findExerciseOption(e)}
                editOption={editOption}
              />
            </IonCol>
          </IonRow>
        );
      })}
    </IonGrid>
  );
};

export default ExerciseSelector;
