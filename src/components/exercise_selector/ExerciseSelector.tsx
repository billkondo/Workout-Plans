import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

import ExerciseCard from './ExerciseCard';
import { muscles } from 'types/muscles';
import { ExerciseOption } from 'types/exercises';

type Props = {
  selectExerciseOption: (exerciseOption: ExerciseOption) => void;
  unselectExerciseOption: (exerciseOption: ExerciseOption) => void;
  selectedExercisesOptions: Array<ExerciseOption>;
};

const E = {
  exercise: {
    title: 'Pull Over',
    description: 'Exercício para costas',
    muscles: [muscles.chest, muscles.back, muscles.lats],
    id: '1'
  },
  id: '1'
};

const ExerciseSelector: React.FC<Props> = ({
  selectExerciseOption,
  unselectExerciseOption,
  selectedExercisesOptions
}) => {
  const isExerciseOptionSelected = (exerciseOption: ExerciseOption) =>
    !!selectedExercisesOptions.find(e => e.id === exerciseOption.id);

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <ExerciseCard
            selectExerciseOption={selectExerciseOption}
            unselectExerciseOption={unselectExerciseOption}
            exerciseOption={E}
            isSelected={isExerciseOptionSelected(E)}
          />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ExerciseSelector;
