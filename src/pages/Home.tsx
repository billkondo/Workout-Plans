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
import Exercices from 'pages/Exercises';

const Home: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet id="tabs">
        <Redirect exact path={routes.home} to="/home/training" />
        <Route
          exact
          path={routes.home_training}
          render={() => <Training />}
        ></Route>
        <Route
          exact={true}
          path={routes.home_exercises}
          render={() => <Exercices />}
        ></Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="training" href={routes.home_training}>
          <IonIcon icon={calendar} />
          <IonLabel>Treinos</IonLabel>
        </IonTabButton>

        <IonTabButton tab="exercises" href={routes.home_exercises}>
          <IonIcon icon={bicycle} />
          <IonLabel>Exercícios</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Home;
