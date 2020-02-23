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

import WeekTraining from './WeeklyTrainings';

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
                  <IonGrid className="header-font">
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
                  <IonGrid className="header-font">
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
