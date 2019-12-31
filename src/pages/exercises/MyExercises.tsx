import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

import ExerciseCard from './ExerciseCard';

import { useStore } from 'hooks/store';
import { useExercisesGetter } from 'hooks/exercises/getter';

const MyExercises = () => {
  const { getUserExercises } = useStore();
  const { exercises } = useExercisesGetter();

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <h3 className="ion-text-center">Meus exercícios</h3>
        </IonCol>
      </IonRow>

      {exercises.map(e => {
        return (
          <IonRow key={e.id}>
            <IonCol>
              <ExerciseCard exercise={e} />
            </IonCol>
          </IonRow>
        );
      })}

      {/* <IonButton onClick={() => getUserExercises()}>OI</IonButton> */}
    </IonGrid>
  );
};

export default MyExercises;
