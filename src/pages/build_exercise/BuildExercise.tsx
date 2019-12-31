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
  IonCol,
  IonAlert
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { Divider } from '@material-ui/core';
import { History } from 'history';

import routes from 'config/routes';

import MuscleSelector from './MuscleSelector';
import TextSelector from './TextSelector';
import FinalPlan from './FinalPlan';

import { Muscle } from 'types/muscles';
import { ExerciseError, ExerciseTextKeys } from 'types/exercises';

import { useExerciseBuild } from 'hooks/exercises/build';
import { useExercisesGetter } from 'hooks/exercises/getter';

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

type Props = {
  history: History;
};

const BuildExercise: React.FC<Props> = ({ history }) => {
  const {
    addMuscle,
    removeMuscle,
    state,
    changeText,
    createExercise,
    ignoreFailed
  } = useExerciseBuild();
  const { backRoute } = useExercisesGetter();

  const create = async () => {
    if (await createExercise()) {
      // Change routes
      history.push(backRoute);
    }
  };

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
        <IonAlert
          isOpen={state.failed}
          onDidDismiss={ignoreFailed}
          header="Erro"
          message="Não foi possível criar o exercício"
        ></IonAlert>

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
                <IonButton expand="block" onClick={create}>
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
