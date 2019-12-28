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
import { calendar, bicycle } from 'ionicons/icons';

import routes from 'config/routes';

import Training from 'pages/Training';
import Exercices from 'pages/exercises/Exercises';

const Home: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet id="tabs">
        <Redirect exact path={routes.home.root} to="/home/training" />
        <Route
          exact
          path={routes.home.training}
          render={() => <Training />}
        ></Route>
        <Route
          exact={true}
          path={routes.home.exercises}
          render={() => <Exercices />}
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
      </IonTabBar>
    </IonTabs>
  );
};

export default Home;
