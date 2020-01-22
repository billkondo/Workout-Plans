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
  IonIcon,
  IonSearchbar
} from '@ionic/react';
import { close } from 'ionicons/icons';

import ExerciseCard from './ExerciseCard';

import { ExerciseOption, Exercise } from 'types/exercises';

import { useExercisesGetter } from 'hooks/exercises/getter';
import { useExercisesSearch } from 'hooks/exercises/search';

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
  const { search, filteredBySearchExercises } = useExercisesSearch({
    exercises
  });

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

      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonSearchbar
                placeholder="Pesquisar"
                onIonChange={e => {
                  if (e.target !== null) {
                    const target = e.target as HTMLInputElement;
                    search(target.value);
                  }
                }}
              ></IonSearchbar>
            </IonCol>
          </IonRow>
          {filteredBySearchExercises.map(e => {
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
