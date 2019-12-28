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

const Exercises = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard
                routerDirection="forward"
                routerLink={routes.exercises.build.root}
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
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Exercises;
