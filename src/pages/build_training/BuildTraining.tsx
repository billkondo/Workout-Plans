import React from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonAlert
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { Divider } from '@material-ui/core';

import routes from 'config/routes';

// Components
import MuscleSelector from './MuscleSelector';
import ExercisesSelector from './ExercisesSelector';
import DaySelector from './DaySelector';
import FinalPlan from './FinalPlan';

import { useTrainingBuild } from 'hooks/training/build';

import { Muscle } from 'types/muscles';
import { ExerciseOption } from 'types/exercises';
import { AppDate } from 'types/dates';
import { TrainingError } from 'types/training';

interface BuildTrainingContextInterface {
  muscles: Array<Muscle>;
  addMuscle: (muscle: Muscle) => void;
  removeMuscle: (muscle: Muscle) => void;

  exerciseOptions: Array<ExerciseOption>;
  addExerciseOption: (exerciseOption: ExerciseOption) => void;
  removeExerciseOption: (exerciseOption: ExerciseOption) => void;

  dates: Array<AppDate>;
  addDate: (date: AppDate) => void;
  removeDate: (date: AppDate) => void;
  editDate: (date: AppDate) => void;
  dayToOpen: string;

  errors: TrainingError;
}

export const BuildTrainingContext = React.createContext<BuildTrainingContextInterface | null>(
  null
);

const BuildTraining = () => {
  const {
    state,
    addMuscle,
    removeMuscle,
    addExerciseOption,
    removeExerciseOption,
    addDate,
    removeDate,
    editDate,
    createTraining,
    ignoreFailed
  } = useTrainingBuild();

  return (
    <BuildTrainingContext.Provider
      value={{
        muscles: state.muscles,
        addMuscle,
        removeMuscle,
        addExerciseOption,
        removeExerciseOption,
        exerciseOptions: state.exerciseOptions,
        addDate,
        editDate,
        removeDate,
        dates: state.dates,
        errors: state.errors,
        dayToOpen: state.dayToOpen
      }}
    >
      <IonPage>
        <IonAlert
          isOpen={state.failed}
          header="Erro"
          message="Não foi possível criar treino"
          onDidDismiss={ignoreFailed}
        ></IonAlert>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="primary">
              <IonButton
                routerLink={routes.home.training}
                routerDirection="back"
              >
                <IonIcon icon={arrowBack}></IonIcon>
              </IonButton>
            </IonButtons>

            <IonTitle>Montando treino</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <MuscleSelector />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <ExercisesSelector />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <DaySelector />
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
                <IonButton expand="block" onClick={createTraining}>
                  Criar
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </BuildTrainingContext.Provider>
  );
};

export default BuildTraining;
