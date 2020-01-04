import React from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

import routes from 'config/routes';

import { useTrainingsGetter } from 'hooks/trainings/getter';

import TrainingCard from './TrainingCard';

const ViewTrainings = () => {
  const { trainings } = useTrainingsGetter();

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="primary">
              <IonButton
                routerLink={routes.home.training}
                routerDirection="back"
              >
                <IonIcon icon={arrowBack}></IonIcon>
              </IonButton>
            </IonButtons>

            <IonTitle className="header-font">Meus Treinos</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          {trainings.map(t => {
            return (
              <IonRow key={t.id}>
                <IonCol>
                  <TrainingCard training={t} />
                </IonCol>
              </IonRow>
            );
          })}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ViewTrainings;
