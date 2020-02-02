import React, { useRef } from 'react';
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
  IonAlert,
  IonLoading
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { Divider } from '@material-ui/core';

// Components
import MuscleSelector from './MuscleSelector';
import ExercisesSelector from './ExercisesSelector';
import DaySelector from './DaySelector';
import FinalPlan from './FinalPlan';

import { Muscle } from 'types/muscles';
import { ExerciseOption, Exercise } from 'types/exercises';
import { AppDate } from 'types/dates';
import { TrainingError } from 'types/training';

type Props = {
  headerTitle: string;
  backRoute: string;
  buttonLabel: string;
  build: () => Promise<boolean>;

  muscles: Muscle[];
  exercisesOptions: ExerciseOption[];
  dates: AppDate[];

  addMuscle: (muscle: Muscle) => void;
  removeMuscle: (muscle: Muscle) => void;

  addExerciseOption: (exercise: Exercise) => void;
  removeExerciseOption: (exercise: Exercise) => void;
  editExerciseOptionInfo: (
    key: string,
    value: number | number[],
    exercise: Exercise
  ) => void;

  addDate: (date: AppDate) => void;
  removeDate: (date: AppDate) => void;
  editDate: (date: AppDate) => void;
  dayToOpen: string;

  failed: boolean;
  ignoreFailed: () => void;
  failMessage: string;

  isLoading: boolean;
  loadingMessage: string;

  errors: TrainingError;
};

const BuildTraining: React.FC<Props> = ({
  headerTitle,
  backRoute,
  buttonLabel,
  build,

  muscles,
  exercisesOptions,
  dates,

  addMuscle,
  removeMuscle,

  addExerciseOption,
  removeExerciseOption,
  editExerciseOptionInfo,

  addDate,
  removeDate,
  editDate,
  dayToOpen,

  failed,
  ignoreFailed,
  failMessage,

  isLoading,
  loadingMessage,

  errors
}) => {
  const goBackButton = useRef<HTMLIonButtonElement>(null);

  const action = async () => {
    if (await build()) {
      if (goBackButton && goBackButton.current) goBackButton.current.click();
    }
  };

  return (
    <IonPage>
      <IonAlert
        isOpen={failed}
        header="Erro"
        message={failMessage}
        onDidDismiss={ignoreFailed}
      ></IonAlert>

      <IonLoading isOpen={isLoading} message={loadingMessage}></IonLoading>

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
                muscles={muscles}
                addMuscle={addMuscle}
                removeMuscle={removeMuscle}
              />
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding">
            <IonCol>
              <ExercisesSelector
                exercisesOptions={exercisesOptions}
                addExerciseOption={addExerciseOption}
                removeExerciseOption={removeExerciseOption}
                editExerciseOptionInfo={editExerciseOptionInfo}
              />
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding">
            <IonCol>
              <DaySelector
                dates={dates}
                addDate={addDate}
                removeDate={removeDate}
                editDate={editDate}
                dayToOpen={dayToOpen}
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
                dates={dates}
                muscles={muscles}
                exercisesOptions={exercisesOptions}
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

export default BuildTraining;
