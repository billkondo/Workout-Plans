import React from 'react';
import { IonGrid, IonRow, IonCol, IonSearchbar, IonButton } from '@ionic/react';

import ExerciseCard from './ExerciseCard';

import { useStore } from 'hooks/store';
import { useExercisesGetter } from 'hooks/exercises/getter';

const MyExercises = () => {
  const { exercises } = useExercisesGetter();

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <h3 className="ion-text-center header-font">Meus exercícios</h3>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol style={{ padding: 0 }}>
          <IonSearchbar placeholder="Pesquisar"></IonSearchbar>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IonButton>Filtros</IonButton>
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
    </IonGrid>
  );
};

export default MyExercises;
