import React from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

import routes from 'config/routes';

const ViewTrainings = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton routerLink={routes.home.training} routerDirection="back">
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>

          <IonTitle>Meus Treinos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding"></IonContent>
    </IonPage>
  );
};

export default ViewTrainings;
