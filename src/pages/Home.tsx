import {
  IonLabel,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonIcon
} from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import { calendar, bicycle, person } from 'ionicons/icons';

import routes from 'config/routes';

import TrainingHome from 'pages/trainings_home/TrainingsHome';
import ExercicesHome from 'pages/exercises_home/ExercisesHome';
import ProfileHome from 'pages/profile_home/ProfileHome';

const Home: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet id="tabs">
        <Redirect exact path={routes.home.root} to="/home/training" />
        <Route
          exact
          path={routes.home.training}
          render={() => <TrainingHome />}
        ></Route>
        <Route
          exact={true}
          path={routes.home.exercises}
          render={() => <ExercicesHome />}
        ></Route>

        <Route
          exact={true}
          path={routes.home.profile}
          render={() => <ProfileHome />}
        ></Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="training" href={routes.home.training}>
          <IonIcon icon={calendar} />
          <IonLabel>Treinos</IonLabel>
        </IonTabButton>

        <IonTabButton tab="exercises" href={routes.home.exercises}>
          <IonIcon icon={bicycle} />
          <IonLabel>Exercícios</IonLabel>
        </IonTabButton>

        <IonTabButton tab="profile" href={routes.home.profile}>
          <IonIcon icon={person}></IonIcon>
          <IonLabel>Perfil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Home;
