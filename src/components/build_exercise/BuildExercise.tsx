import React, { useRef } from 'react';
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
  IonCol,
  IonAlert,
  IonLoading
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { Divider } from '@material-ui/core';

import MuscleSelector from './MuscleSelector';
import TextSelector from './TextSelector';
import FinalPlan from './FinalPlan';

import { Muscle } from 'types/muscles';
import { ExerciseError, ExerciseTextKeys } from 'types/exercises';

type Props = {
  backRoute: string;
  headerTitle: string;
  buttonLabel: string;
  build: () => Promise<boolean>;

  muscles: Muscle[];
  title: string;
  description: string;

  errors: ExerciseError;

  addMuscle: (muscle: Muscle) => void;
  removeMuscle: (muscle: Muscle) => void;
  changeText: (key: ExerciseTextKeys, value: string) => void;

  failed: boolean;
  ignoreFailed: () => void;
  failMessage: string;

  isLoading: boolean;
  loadingMessage: string;
};

const BuildExercise: React.FC<Props> = ({
  title,
  description,
  muscles,

  errors,

  backRoute,
  headerTitle,
  buttonLabel,
  build,

  addMuscle,
  removeMuscle,
  changeText,

  failed,
  ignoreFailed,
  failMessage,

  isLoading,
  loadingMessage
}) => {
  const goBackButton = useRef<HTMLIonButtonElement>(null);

  const action = async () => {
    if (await build()) {
      if (goBackButton && goBackButton.current) goBackButton.current.click();
    }
  };

  return (
    <IonPage>
      <IonLoading isOpen={isLoading} message={loadingMessage}></IonLoading>

      <IonAlert
        isOpen={failed}
        onDidDismiss={ignoreFailed}
        header="Erro"
        message={failMessage}
      ></IonAlert>

      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="primary">
              <IonButton
                routerLink={backRoute}
                routerDirection="back"
                ref={goBackButton}
              >
                <IonIcon icon={arrowBack}></IonIcon>
              </IonButton>
            </IonButtons>

            <IonTitle className="header-font">{headerTitle}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow className="ion-padding">
            <IonCol>
              <MuscleSelector
                addMuscle={addMuscle}
                muscles={muscles}
                removeMuscle={removeMuscle}
              />
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding">
            <IonCol>
              <TextSelector
                title={title}
                description={description}
                changeText={changeText}
              />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <Divider />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <FinalPlan
                description={description}
                title={title}
                muscles={muscles}
                errors={errors}
              />
            </IonCol>
          </IonRow>

          <IonRow style={{ marginTop: 32 }}>
            <IonCol>
              <IonButton expand="block" onClick={action}>
                {buttonLabel}
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default BuildExercise;
