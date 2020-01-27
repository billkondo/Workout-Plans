import React, { useRef } from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton,
  IonFabList,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { arrowBack, arrowDropleft, create, trash } from 'ionicons/icons';

import { Training } from 'types/training';

import DatesList from 'components/trainings/DatesList';
import MusclesList from 'components/trainings/MusclesList';
import ExercisesOptionsList from 'components/trainings/ExercisesOptionsList';

import routes from 'config/routes';

type Props = {
  training: Training;
};

const TrainingPage: React.FC<Props> = ({ training }) => {
  const goBackButton = useRef<HTMLIonButtonElement>(null);

  return (
    <IonPage>
      <IonContent>
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

        <IonGrid style={{ marginBottom: 50 }}>
          <IonRow>
            <IonCol>
              <DatesList dates={training.dates} />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <MusclesList muscles={training.muscles} />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <ExercisesOptionsList
                exercisesOptions={training.exerciseOptions}
                showInfo={true}
              />
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={arrowDropleft}></IonIcon>
          </IonFabButton>

          <IonFabList side="start">
            <IonFabButton
            // routerDirection="forward"
            // routerLink={routes.exercises.edit(match.params.id)}
            >
              <IonIcon icon={create}></IonIcon>
            </IonFabButton>

            <IonFabButton>
              <IonIcon
                icon={trash}
                // onClick={() => setShowDeleteAlert(true)}
              ></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default TrainingPage;
