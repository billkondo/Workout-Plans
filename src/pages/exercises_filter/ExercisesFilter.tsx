import React from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import { arrowBack } from 'ionicons/icons';
import { Grid } from '@material-ui/core';

import { ExercisesFiltersIDs } from 'types/exercises';

import navigation from 'config/navigation';
import routes from 'config/routes';

import { useExercisesFilter } from 'hooks/exercises/filter';
import { useExercisesGetter } from 'hooks/exercises/getter';

import MuscleList from './MuscleList';

interface Props extends RouteComponentProps<{ id: ExercisesFiltersIDs }> {}

const ExercisesFilter: React.FC<Props> = ({ match }) => {
  const id = match.params.id;
  const { exercises } = useExercisesGetter();
  const {
    addMuscle,
    removeMuscle,
    muscles,
    reset,
    filteredExercises,
    applyFilters
  } = useExercisesFilter({
    id,
    exercises
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton
              routerDirection="none"
              routerLink={navigation.exercises_filter[id].backRoute}
              onClick={reset}
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle className="header-font">Filtros de exercícios</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <Grid container direction="column">
          <Grid item container justify="flex-end">
            <Grid item>
              <IonButton color="light" onClick={reset}>
                Limpar
              </IonButton>
            </Grid>
          </Grid>

          <Grid item container>
            <Grid item>
              <MuscleList
                muscles={muscles}
                addMuscle={addMuscle}
                removeMuscle={removeMuscle}
              />
            </Grid>
          </Grid>
        </Grid>

        <IonButton
          expand="full"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            margin: 0
          }}
          onClick={applyFilters}
          routerLink={routes.home.exercises}
          routerDirection="none"
        >
          {`Ver ${filteredExercises.length} resultados`}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ExercisesFilter;
