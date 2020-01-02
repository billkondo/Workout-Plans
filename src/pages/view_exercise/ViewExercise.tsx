import React from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonTitle,
  IonTextarea,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonLabel,
  IonFab,
  IonFabButton,
  IonFabList
} from '@ionic/react';
import { arrowBack, create, arrowDropleft, trash } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router-dom';

import routes from 'config/routes';
import { useExercisesGetter } from 'hooks/exercises/getter';

interface Props extends RouteComponentProps<{ id: string }> {}

const ViewExercise: React.FC<Props> = ({ match }) => {
  const { findExerciseByID } = useExercisesGetter();

  const exercise = findExerciseByID(match.params.id);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton
              routerLink={routes.home.exercises}
              routerDirection="back"
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>

          {exercise && (
            <IonTitle className="title-font">{exercise.title}</IonTitle>
          )}
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {exercise ? (
          <IonGrid className="ion-padding">
            <IonRow>
              <IonCol>
                <IonTextarea
                  value={exercise.description}
                  autoGrow={true}
                ></IonTextarea>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                {exercise.muscles.map(m => {
                  return (
                    <IonChip key={m.type}>
                      <IonLabel>{m.label}</IonLabel>
                    </IonChip>
                  );
                })}
              </IonCol>
            </IonRow>
          </IonGrid>
        ) : (
          <IonGrid>
            <IonRow>
              <IonCol>oi</IonCol>
            </IonRow>
          </IonGrid>
        )}

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={arrowDropleft}></IonIcon>
          </IonFabButton>

          <IonFabList side="start">
            <IonFabButton>
              <IonIcon icon={create}></IonIcon>
            </IonFabButton>

            <IonFabButton>
              <IonIcon icon={trash}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default ViewExercise;
