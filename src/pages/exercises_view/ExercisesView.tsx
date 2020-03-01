import React, { useState, useRef } from 'react';
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
  IonFab,
  IonFabButton,
  IonFabList,
  IonAlert,
  IonText,
  IonLoading
} from '@ionic/react';
import { arrowBack, create, arrowDropleft, trash } from 'ionicons/icons';
import { useParams } from 'react-router';

import routes from 'config/routes';
import { useExercisesGetter } from 'hooks/exercises/getter';
import { useExercisesDelete } from 'hooks/exercises/delete';

import MuscleChip from 'components/MuscleChip';

const ExercisesView = () => {
  const { id } = useParams();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const { findExerciseByID } = useExercisesGetter();
  const exercise = findExerciseByID(id);
  const { deleteExercise, isDeleting } = useExercisesDelete();
  const goBackButton = useRef<HTMLIonButtonElement>(null);

  const deleteHandler = async () => {
    if (!!exercise)
      if (await deleteExercise(exercise)) {
        if (goBackButton && goBackButton.current) goBackButton.current.click();
      }
  };

  return (
    <IonPage>
      <IonLoading
        isOpen={isDeleting}
        message="Deletando exercício"
      ></IonLoading>

      <IonAlert
        isOpen={showDeleteAlert}
        message="Deseja mesmo deletar este exercício ?"
        header="Atenção"
        buttons={[
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => setShowDeleteAlert(false)
          },
          {
            text: 'Deletar',
            handler: deleteHandler
          }
        ]}
      ></IonAlert>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton
              routerLink={routes.home.exercises}
              routerDirection="back"
              ref={goBackButton}
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
        {!exercise ? (
          <IonText> 404</IonText>
        ) : (
          <IonGrid className="ion-padding">
            {!!exercise.description && (
              <IonRow>
                <IonCol>
                  <IonTextarea value={exercise.description}></IonTextarea>
                </IonCol>
              </IonRow>
            )}

            <IonRow>
              <IonCol>
                {exercise.muscles.map(m => {
                  return <MuscleChip muscle={m} key={m.type}></MuscleChip>;
                })}
              </IonCol>
            </IonRow>
          </IonGrid>
        )}

        {exercise && (
          <IonFab slot="fixed" vertical="bottom" horizontal="end">
            <IonFabButton>
              <IonIcon icon={arrowDropleft}></IonIcon>
            </IonFabButton>

            <IonFabList side="start">
              <IonFabButton
                routerDirection="forward"
                routerLink={routes.exercises.edit(id)}
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
        )}
      </IonContent>
    </IonPage>
  );
};

export default ExercisesView;
