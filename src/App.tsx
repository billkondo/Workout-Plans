import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// Custom components
import Home from 'pages/Home';

import Login from 'pages/Login';

import TrainingsCreate from 'pages/trainings_create/TrainingsCreate';
import TrainingsList from 'pages/trainings_list/TrainingsList';
import TrainingsView from 'pages/trainings_view/TrainingsView';
import TrainingsFilter from 'pages/trainings_filter/TrainingsFilter';

import ExercisesCreate from 'pages/exercises_create/ExercisesCreate';
import ExercisesView from 'pages/exercises_view/ExercisesView';
import ExercisesFilter from 'pages/exercises_filter/ExercisesFilter';
import ExercisesEdit from 'pages/exercises_edit/ExercisesEdit';

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
            path={routes.trainings.create}
            component={TrainingsCreate}
          />
          <Route exact path={routes.login} component={Login} />
          <Route
            exact
            path={routes.exercises.create}
            component={ExercisesCreate}
          />
          <Route exact path={routes.trainings.list} component={TrainingsList} />
          <Route
            exact
            path={routes.exercises.view()}
            component={ExercisesView}
          />
          <Route
            exact
            path={routes.trainings.filters}
            component={TrainingsFilter}
          />

          <Route
            exact
            path={routes.exercises.filters()}
            component={ExercisesFilter}
          />

          <Route
            exact
            path={routes.exercises.edit()}
            component={ExercisesEdit}
          />

          <Route
            exact
            path={routes.trainings.view()}
            component={TrainingsView}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
