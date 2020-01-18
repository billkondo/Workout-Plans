import React from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/react';
import { close } from 'ionicons/icons';

import ExerciseCard from './ExerciseCard';

import { ExerciseOption, Exercise } from 'types/exercises';

import { useExercisesGetter } from 'hooks/exercises/getter';

type Props = {
  isOpen: boolean;
  closeSelector: () => void;
  selectExerciseOption: (exercise: Exercise) => void;
  unselectExerciseOption: (exercise: Exercise) => void;
  selectedExercisesOptions: Array<ExerciseOption>;
  editOption?: (
    key: string,
    value: number | number[],
    exercise: Exercise
  ) => void;
};

const ExerciseSelector: React.FC<Props> = ({
  selectExerciseOption,
  unselectExerciseOption,
  selectedExercisesOptions,
  editOption,
  isOpen,
  closeSelector
}) => {
  const { exercises } = useExercisesGetter();

  const findExerciseOption = (exercise: Exercise) =>
    selectedExercisesOptions.find(e => e.exercise.id === exercise.id);

  return (
    <IonModal isOpen={isOpen} onDidDismiss={closeSelector}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={closeSelector}>
              <IonIcon icon={close}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
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
      </IonContent>
    </IonModal>
  );
};

export default ExerciseSelector;
