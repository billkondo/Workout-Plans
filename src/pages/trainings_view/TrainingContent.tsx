import React, { useState } from 'react';
import {
  IonContent,
  IonIcon,
  IonFab,
  IonFabButton,
  IonFabList,
  IonGrid,
  IonRow,
  IonCol,
  IonAlert,
  IonLoading
} from '@ionic/react';
import { arrowDropleft, create, trash } from 'ionicons/icons';

import { Training } from 'types/training';

import DatesList from 'components/trainings/DatesList';
import MusclesList from 'components/trainings/MusclesList';
import ExercisesOptionsList from 'components/trainings/ExercisesOptionsList';

type Props = {
  training: Training;
  isDeleting: boolean;
  deleteHandler: (training: Training) => void;
};

const TrainingPage: React.FC<Props> = ({
  training,
  isDeleting,
  deleteHandler
}) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <React.Fragment>
      <IonLoading isOpen={isDeleting} message="Deletando treino"></IonLoading>

      <IonAlert
        isOpen={showDeleteAlert}
        header="Atenção"
        message="Deseja mesmo deletar esse treino ?"
        buttons={[
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => setShowDeleteAlert(false)
          },
          {
            text: 'Deletar',
            handler: () => deleteHandler(training)
          }
        ]}
      ></IonAlert>

      <IonContent>
        <IonGrid style={{ marginBottom: 75 }}>
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
                onClick={() => setShowDeleteAlert(true)}
              ></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </React.Fragment>
  );
};

export default TrainingPage;
