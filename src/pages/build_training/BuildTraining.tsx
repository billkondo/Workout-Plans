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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonTitle
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

import routes from 'config/routes';

import MuscleSelector from './MuscleSelector';

import { Muscle } from 'types/muscles';

interface BuildTrainingContextInterface {
  muscles: Array<Muscle>;
  addMuscle: (muscle: Muscle) => void;
  removeMuscle: (muscle: Muscle) => void;
}

export const BuildTrainingContext = React.createContext<BuildTrainingContextInterface | null>(
  null
);

type BuildTrainingState = {
  muscles: Array<Muscle>;
};

const initialState: BuildTrainingState = {
  muscles: []
};

type BuildTrainingActions =
  | {
      type: 'ADD_MUSCLE';
      muscle: Muscle;
    }
  | {
      type: 'REMOVE_MUSCLE';
      muscle: Muscle;
    };

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

  return (
    <BuildTrainingContext.Provider
      value={{ muscles: state.muscles, addMuscle, removeMuscle }}
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
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle className="ion-padding">
                      Escolher exercícios
                    </IonCardTitle>
                    <IonCardSubtitle className="ion-padding">
                      Quais exercícios, séries e repetições haverá em seu treino
                    </IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle className="ion-padding">
                      Escolher dia
                    </IonCardTitle>
                    <IonCardSubtitle className="ion-padding">
                      Quando esse treino será executado
                    </IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </BuildTrainingContext.Provider>
  );
};

export default BuildTraining;
