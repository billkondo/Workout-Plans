import React from 'react';
import {
  IonModal,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonText
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

import { DailyTraining, Training } from 'types/training';

type Props = {
  dailyTraining: DailyTraining | null;
  closeModal: () => void;
};

type MapMuscleToSets = {
  [key: string]: number;
};

const extractMusclesAndSetsFromTrainings = (
  trainings: Training[]
): MapMuscleToSets => {
  const mapMuscleToSets: MapMuscleToSets = {};

  for (const training of trainings) {
    for (const exerciseOption of training.exerciseOptions) {
      for (const muscle of exerciseOption.exercise.muscles) {
        if (!mapMuscleToSets[muscle.label]) mapMuscleToSets[muscle.label] = 0;
        mapMuscleToSets[muscle.label] += exerciseOption.info.sets;
      }
    }
  }

  return mapMuscleToSets;
};

const RestDayContent = () => {
  return (
    <div className="ion-text-center sub-header-font" style={{ marginTop: 32 }}>
      <IonText>Dia de descanso</IonText>
    </div>
  );
};

const TrainingCardModal: React.FC<Props> = ({ closeModal, dailyTraining }) => {
  const isOpen = !!dailyTraining;

  const trainings = dailyTraining ? dailyTraining.trainings : [];
  const mapMusclesToSets = extractMusclesAndSetsFromTrainings(trainings);
  const muscles = Object.keys(mapMusclesToSets);

  const isRestDay = trainings.length === 0;

  return (
    <IonModal isOpen={isOpen}>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="primary">
              <IonButton onClick={closeModal}>
                <IonIcon icon={arrowBack}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle className="header-font">
              {dailyTraining && dailyTraining.date}
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid className="ion-padding">
          {isRestDay && <RestDayContent></RestDayContent>}

          {!isRestDay && (
            <React.Fragment>
              <IonRow style={{ marginBottom: 8 }}>
                <IonCol className="ion-text-center sub-header-font">
                  Músculos
                </IonCol>
                <IonCol className="ion-text-center sub-header-font">
                  Séries
                </IonCol>
              </IonRow>

              {muscles.map(m => {
                return (
                  <IonRow key={m}>
                    <IonCol className="ion-text-center">{m}</IonCol>
                    <IonCol className="ion-text-center">
                      {mapMusclesToSets[m]}
                    </IonCol>
                  </IonRow>
                );
              })}
            </React.Fragment>
          )}
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default TrainingCardModal;
