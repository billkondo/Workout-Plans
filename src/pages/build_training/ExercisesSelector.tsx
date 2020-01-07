import React, { useState, useContext } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonModal,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow
} from '@ionic/react';
import { close } from 'ionicons/icons';

import ExerciseSelectorComponent from 'components/exercise_selector/ExerciseSelector';
import { BuildTrainingContext } from './BuildTraining';
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
      <IonModal isOpen={isOpen} onDidDismiss={() => setOpen(false)}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={() => setOpen(false)}>
                <IonIcon icon={close}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonGrid class="ion-padding">
            <IonRow>
              <ExerciseSelectorComponent
                selectedExercisesOptions={context.exerciseOptions}
                selectExerciseOption={selectExerciseOption}
                unselectExerciseOption={unselectExerciseOption}
                editOption={editOption}
              />
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>

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
