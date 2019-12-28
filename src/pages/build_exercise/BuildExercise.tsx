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
import { Divider } from '@material-ui/core';

import routes from 'config/routes';

import MuscleSelector from './MuscleSelector';
import TextSelector from './TextSelector';
import FinalPlan from './FinalPlan';

import { Muscle } from 'types/muscles';
import { ExerciseError, ExerciseTextKeys } from 'types/exercises';

import { useExerciseBuild } from 'hooks/exercises/build';

interface BuildExerciseContextInterface {
  muscles: Array<Muscle>;
  addMuscle: (muscle: Muscle) => void;
  removeMuscle: (muscle: Muscle) => void;

  title: string;
  description: string;
  changeText: (key: ExerciseTextKeys, value: string) => void;

  errors: ExerciseError;
}

export const BuildExerciseContext = React.createContext<BuildExerciseContextInterface | null>(
  null
);

const BuildExercise = () => {
  const {
    addMuscle,
    removeMuscle,
    state,
    changeText,
    createExercise
  } = useExerciseBuild();

  return (
    <BuildExerciseContext.Provider
      value={{
        muscles: state.muscles,
        addMuscle,
        removeMuscle,
        title: state.title,
        description: state.description,
        changeText,
        errors: state.errors
      }}
    >
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

            <IonTitle>Montando exercício</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid className="ion-padding">
            <IonRow>
              <IonCol>
                <MuscleSelector />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <TextSelector />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <Divider />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <FinalPlan />
              </IonCol>
            </IonRow>

            <IonRow style={{ marginTop: 32 }}>
              <IonCol>
                <IonButton expand="block" onClick={createExercise}>
                  Criar
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </BuildExerciseContext.Provider>
  );
};

export default BuildExercise;
