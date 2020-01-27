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

import WeekTraining from './WeekTraining';

import routes from 'config/routes';

const TrainingsHome = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard
                routerDirection="forward"
                routerLink={routes.trainings.create}
              >
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <IonText>Montar</IonText>
                    </IonRow>

                    <IonRow>
                      <IonText>Treino</IonText>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/* <IonCol size="6">
              <IonCard>
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <IonText>Iniciar</IonText>
                    </IonRow>

                    <IonRow>
                      <IonText>Treino</IonText>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonCol> */}
          </IonRow>

          <IonRow>
            <IonCol>
              <WeekTraining />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="6">
              <IonCard
                routerDirection="forward"
                routerLink={routes.trainings.list}
              >
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <IonText>Meus</IonText>
                    </IonRow>

                    <IonRow>
                      <IonText>Treinos</IonText>
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

export default TrainingsHome;
