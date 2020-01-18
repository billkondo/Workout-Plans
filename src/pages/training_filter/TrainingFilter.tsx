import React from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonIcon
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { Grid } from '@material-ui/core';

import routes from 'config/routes';

import MuscleFilter from './MuscleFilter';
import ExerciseFilter from './ExerciseFilter';

import { useTrainingsFilter } from 'hooks/trainings/filter';

const TrainingFilter = () => {
  const {
    addExerciseOption,
    addMuscle,
    removeMuscle,
    removeExerciseOption,
    exercisesOption,
    muscles,
    reset,
    filteredTrainings,
    saveFilters
  } = useTrainingsFilter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton
              routerLink={routes.training.view.root}
              routerDirection="none"
              onClick={reset}
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle className="header-font">Filtros</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <Grid container direction="column">
          <Grid item container justify="flex-end">
            <Grid item>
              <IonButton size="small" onClick={reset}>
                Limpar
              </IonButton>
            </Grid>
          </Grid>

          <Grid item container>
            <Grid item>
              <MuscleFilter
                muscles={muscles}
                addMuscle={addMuscle}
                removeMuscle={removeMuscle}
              />
            </Grid>
          </Grid>

          <Grid item container style={{ marginTop: 32 }}>
            <Grid item>
              <ExerciseFilter
                addExercise={addExerciseOption}
                exercises={exercisesOption}
                removeExercise={removeExerciseOption}
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
          onClick={saveFilters}
          routerLink={routes.training.view.root}
          routerDirection="none"
        >
          {`Ver ${filteredTrainings.length} resultados`}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default TrainingFilter;
