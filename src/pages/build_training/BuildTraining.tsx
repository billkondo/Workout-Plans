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
import { History } from 'history';

import routes from 'config/routes';

// Components
import MuscleSelector from './MuscleSelector';
import ExercisesSelector from './ExercisesSelector';
import DaySelector from './DaySelector';
import FinalPlan from './FinalPlan';

import { useTrainingsBuild } from 'hooks/trainings/build';

import { Muscle } from 'types/muscles';
import { ExerciseOption, Exercise } from 'types/exercises';
import { AppDate } from 'types/dates';
import { TrainingError } from 'types/training';

interface BuildTrainingContextInterface {
  muscles: Array<Muscle>;
  addMuscle: (muscle: Muscle) => void;
  removeMuscle: (muscle: Muscle) => void;

  exerciseOptions: Array<ExerciseOption>;
  addExerciseOption: (exercise: Exercise) => void;
  removeExerciseOption: (exercise: Exercise) => void;
  editExerciseOptionInfo: (
    key: string,
    value: number | number[],
    exercise: Exercise
  ) => void;

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

type Props = {
  history: History;
};

const BuildTraining: React.FC<Props> = ({ history }) => {
  const {
    state,
    addMuscle,
    removeMuscle,
    addExerciseOption,
    removeExerciseOption,
    editExerciseOptionInfo,
    addDate,
    removeDate,
    editDate,
    createTraining,
    ignoreFailed
  } = useTrainingsBuild();

  const create = async () => {
    if (await createTraining()) {
      history.push(routes.home.training);
    }
  };

  return (
    <BuildTrainingContext.Provider
      value={{
        muscles: state.muscles,
        addMuscle,
        removeMuscle,
        addExerciseOption,
        removeExerciseOption,
        editExerciseOptionInfo,
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

        <IonContent>
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

              <IonTitle className="header-font">Montando treino</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonGrid>
            <IonRow className="ion-padding">
              <IonCol>
                <MuscleSelector />
              </IonCol>
            </IonRow>

            <IonRow className="ion-padding">
              <IonCol>
                <ExercisesSelector />
              </IonCol>
            </IonRow>

            <IonRow className="ion-padding">
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
                <IonButton expand="block" onClick={create}>
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
