import React from 'react';
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonText
} from '@ionic/react';

import routes from 'config/routes';

import MyExercises from './MyExercises';

const ExercisesHome = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard
                routerDirection="forward"
                routerLink={routes.exercises.create}
              >
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <IonText>Montar</IonText>
                    </IonRow>

                    <IonRow>
                      <IonText>Exercício</IonText>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow style={{ marginTop: 16 }}>
            <IonCol>
              <MyExercises />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ExercisesHome;
