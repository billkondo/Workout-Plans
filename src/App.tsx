import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// Custom components
import AppContextProvider from 'AppContextProvider';

import Home from 'pages/Home';

import LoginPage from 'pages/login/LoginPage';

import TrainingsCreate from 'pages/trainings_create/TrainingsCreate';
import TrainingsList from 'pages/trainings_list/TrainingsList';
import TrainingsView from 'pages/trainings_view/TrainingsView';
import TrainingsFilter from 'pages/trainings_filter/TrainingsFilter';
import TrainingsEdit from 'pages/trainings_edit/TrainingsEdit';

import ExercisesCreate from 'pages/exercises_create/ExercisesCreate';
import ExercisesView from 'pages/exercises_view/ExercisesView';
import ExercisesFilter from 'pages/exercises_filter/ExercisesFilter';
import ExercisesEdit from 'pages/exercises_edit/ExercisesEdit';

import ProfileSettings from 'pages/profile_settings/ProfileSettings';

import PrivateRoute from 'components/PrivateRoute';

// Hooks
import { useApp } from 'hooks/app';

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
  useApp();

  return (
    <AppContextProvider>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet id="main">
            <Route exact path={routes.login} component={LoginPage} />

            <Route
              exact
              path="/"
              render={() => <Redirect to={routes.home.root} />}
            />

            <PrivateRoute path={routes.home.root}>
              <Home></Home>
            </PrivateRoute>

            <PrivateRoute exact path={routes.trainings.create}>
              <TrainingsCreate></TrainingsCreate>
            </PrivateRoute>

            <PrivateRoute exact path={routes.exercises.create}>
              <ExercisesCreate></ExercisesCreate>
            </PrivateRoute>

            <PrivateRoute exact path={routes.trainings.list}>
              <TrainingsList></TrainingsList>
            </PrivateRoute>

            <PrivateRoute exact path={routes.exercises.view()}>
              <ExercisesView></ExercisesView>
            </PrivateRoute>

            <PrivateRoute exact path={routes.trainings.filters}>
              <TrainingsFilter></TrainingsFilter>
            </PrivateRoute>

            <PrivateRoute exact path={routes.exercises.filters()}>
              <ExercisesFilter></ExercisesFilter>
            </PrivateRoute>

            <PrivateRoute exact path={routes.exercises.edit()}>
              <ExercisesEdit></ExercisesEdit>
            </PrivateRoute>

            <PrivateRoute exact path={routes.trainings.view()}>
              <TrainingsView></TrainingsView>
            </PrivateRoute>

            <PrivateRoute exact path={routes.trainings.edit()}>
              <TrainingsEdit></TrainingsEdit>
            </PrivateRoute>

            <PrivateRoute exact path={routes.profile.settings}>
              <ProfileSettings></ProfileSettings>
            </PrivateRoute>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </AppContextProvider>
  );
};

export default App;
