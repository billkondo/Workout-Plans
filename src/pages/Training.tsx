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

const Training = () => {
  return (
    <IonPage className="ion-padding">
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard
                routerDirection="forward"
                routerLink={routes.training.build.root}
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

            <IonCol size="6">
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
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Training;
