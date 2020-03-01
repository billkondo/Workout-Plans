import React, { useRef } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { useParams } from 'react-router';

import { useTrainingsGetter } from 'hooks/trainings/getter';
import { useTrainingsDelete } from 'hooks/trainings/delete';

import NotFound from './NotFound';
import TrainingContent from './TrainingContent';

import routes from 'config/routes';

import { Training } from 'types/training';

const TrainingsView = () => {
  const { id } = useParams();
  const { findTrainingByID } = useTrainingsGetter();

  const training = findTrainingByID(id);
  const goBackButton = useRef<HTMLIonButtonElement>(null);
  const { isDeleting, deleteTraining } = useTrainingsDelete();

  const deleteHandler = async (training: Training) => {
    if (await deleteTraining(training)) {
      if (goBackButton && goBackButton.current) goBackButton.current.click();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton
              routerLink={routes.trainings.list}
              routerDirection="back"
              ref={goBackButton}
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      {!training ? (
        <NotFound />
      ) : (
        <TrainingContent
          training={training}
          deleteHandler={deleteHandler}
          isDeleting={isDeleting}
        />
      )}
    </IonPage>
  );
};

export default TrainingsView;
