import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// Custom components
import Home from 'pages/Home';
import Login from 'pages/Login';
import BuildTraining from 'pages/build_training/BuildTraining';
import BuildExercise from 'pages/build_exercise/BuildExercise';
import ViewTrainings from 'pages/view_trainings/ViewTrainings';
import ViewExercise from 'pages/view_exercise/ViewExercise';

import { useFirebase } from 'hooks/firebase';
import { useTrainingsPersistence } from 'hooks/trainings/persistence';
import { useExercisesPersistence } from 'hooks/exercises/persistence';

// Config files
import routes from 'config/routes'; // URL definitions

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/app.scss';

const App: React.FC = () => {
  useFirebase();
  useTrainingsPersistence();
  useExercisesPersistence();

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path={routes.home.root} component={Home} />
          <Route
            exact
            path="/"
            render={() => <Redirect to={routes.home.root} />}
          />
          <Route
            exact
            path={routes.training.build.root}
            component={BuildTraining}
          />
          <Route exact path={routes.login} component={Login} />
          <Route
            exact
            path={routes.exercises.build.root}
            component={BuildExercise}
          />
          <Route
            exact
            path={routes.training.view.root}
            component={ViewTrainings}
          />
          <Route
            exact
            path={routes.exercises.view.exercise()}
            component={ViewExercise}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
