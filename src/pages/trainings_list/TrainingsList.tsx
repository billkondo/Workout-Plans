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
import { useTrainingsFilter } from 'hooks/trainings/filter';

import Controls from './Controls';
import TrainingCard from './TrainingCard';

const TrainingsList = () => {
  const { trainings } = useTrainingsGetter();
  const {
    hasFilters,
    filteredTrainings,
    muscles,
    exercisesOption
  } = useTrainingsFilter();

  const trainingsToDisplay = hasFilters ? filteredTrainings : trainings;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton routerLink={routes.home.training} routerDirection="back">
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>

          <IonTitle className="header-font">Meus Treinos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow className="ion-padding">
            <IonCol style={{ padding: 0 }}>
              <Controls
                activeFilters={muscles.length + exercisesOption.length}
              />
            </IonCol>
          </IonRow>

          {trainingsToDisplay.map(t => {
            return (
              <IonRow key={t.id}>
                <IonCol>
                  <TrainingCard training={t} />
                </IonCol>
              </IonRow>
            );
          })}

          {trainingsToDisplay.length === 0 && (
            <IonRow>
              <IonCol>
                <div className="ion-text-center">Nenhum treino encontrado</div>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TrainingsList;
