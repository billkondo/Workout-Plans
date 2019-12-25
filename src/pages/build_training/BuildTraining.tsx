import React, { useReducer } from 'react';
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
  IonTitle
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { Divider } from '@material-ui/core';

import routes from 'config/routes';

// Components
import MuscleSelector from './MuscleSelector';
import ExercisesSelector from './ExercisesSelector';
import DaySelector from './DaySelector';
import FinalPlan from './FinalPlan';

import { Muscle } from 'types/muscles';
import { ExerciseOption } from 'types/exercises';
import { AppDate } from 'types/dates';

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
}

export const BuildTrainingContext = React.createContext<BuildTrainingContextInterface | null>(
  null
);

type BuildTrainingState = {
  muscles: Array<Muscle>;
  exerciseOptions: Array<ExerciseOption>;
  dates: Array<AppDate>;
};

const initialState: BuildTrainingState = {
  muscles: [],
  exerciseOptions: [],
  dates: []
};

type BuildTrainingActions =
  | {
      type: 'ADD_MUSCLE';
      muscle: Muscle;
    }
  | {
      type: 'REMOVE_MUSCLE';
      muscle: Muscle;
    }
  | { type: 'ADD_EXERCISE_OPTION'; exerciseOption: ExerciseOption }
  | { type: 'REMOVE_EXERCISE_OPTION'; exerciseOption: ExerciseOption }
  | { type: 'ADD_DATE'; date: AppDate }
  | { type: 'REMOVE_DATE'; date: AppDate }
  | { type: 'EDIT_DATE'; date: AppDate };

const reducer = (
  state = initialState,
  action: BuildTrainingActions
): BuildTrainingState => {
  switch (action.type) {
    case 'ADD_MUSCLE':
      return {
        ...state,
        muscles: state.muscles.concat(action.muscle)
      };

    case 'REMOVE_MUSCLE':
      return {
        ...state,
        muscles: state.muscles.filter(
          muscle => muscle.type !== action.muscle.type
        )
      };

    case 'ADD_EXERCISE_OPTION':
      return {
        ...state,
        exerciseOptions: state.exerciseOptions.concat(action.exerciseOption)
      };

    case 'REMOVE_EXERCISE_OPTION':
      return {
        ...state,
        exerciseOptions: state.exerciseOptions.filter(
          exerciseOption => exerciseOption.id !== action.exerciseOption.id
        )
      };

    case 'ADD_DATE':
      return {
        ...state,
        dates: state.dates.concat(action.date)
      };

    case 'REMOVE_DATE':
      return {
        ...state,
        dates: state.dates.filter(d => d.id !== action.date.id)
      };

    case 'EDIT_DATE':
      return {
        ...state,
        dates: state.dates.map(d => (d.id === action.date.id ? action.date : d))
      };

    default:
      return state;
  }
};

const BuildTraining = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addMuscle = (muscle: Muscle) =>
    dispatch({ type: 'ADD_MUSCLE', muscle });

  const removeMuscle = (muscle: Muscle) =>
    dispatch({ type: 'REMOVE_MUSCLE', muscle });

  const addExerciseOption = (exerciseOption: ExerciseOption) =>
    dispatch({ type: 'ADD_EXERCISE_OPTION', exerciseOption });

  const removeExerciseOption = (exerciseOption: ExerciseOption) =>
    dispatch({ type: 'REMOVE_EXERCISE_OPTION', exerciseOption });

  const addDate = (date: AppDate) => dispatch({ type: 'ADD_DATE', date });

  const removeDate = (date: AppDate) => dispatch({ type: 'REMOVE_DATE', date });

  const editDate = (date: AppDate) => dispatch({ type: 'EDIT_DATE', date });

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
        dates: state.dates
      }}
    >
      <IonPage>
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
          </IonGrid>
        </IonContent>
      </IonPage>
    </BuildTrainingContext.Provider>
  );
};

export default BuildTraining;
