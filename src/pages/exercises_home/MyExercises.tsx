import React from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonButton,
  IonIcon,
  IonBadge
} from '@ionic/react';
import { list } from 'ionicons/icons';
import { colors } from '@material-ui/core';

import ExerciseCard from './ExerciseCard';

import { useExercisesGetter } from 'hooks/exercises/getter';
import { useExercisesSearch } from 'hooks/exercises/search';
import { useExercisesFilter } from 'hooks/exercises/filter';

import routes from 'config/routes';

const MyExercises = () => {
  const { exercises } = useExercisesGetter();
  const {
    filteredExercises,
    hasFilters,
    filtersQuantity
  } = useExercisesFilter({ id: 'home', exercises });
  const { search, filteredBySearchExercises } = useExercisesSearch({
    exercises: filteredExercises
  });

  const exercisesList = filteredBySearchExercises;

  const isExercisesEmpty = exercisesList.length === 0;

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <h3 className="ion-text-center header-font">Meus exercícios</h3>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol style={{ padding: 0 }}>
          <IonSearchbar
            placeholder="Pesquisar"
            onIonChange={e => {
              if (e.target !== null) {
                const target = e.target as HTMLInputElement;
                search(target.value);
              }
            }}
          ></IonSearchbar>
        </IonCol>
      </IonRow>

      <IonRow style={{ marginBottom: 16 }}>
        <IonCol style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IonButton
            routerDirection="none"
            routerLink={routes.exercises.filters('home')}
            color={hasFilters ? 'danger' : 'light'}
          >
            Filtros
            {!hasFilters && (
              <div style={{ marginLeft: 16 }}>
                <IonIcon icon={list}></IonIcon>
              </div>
            )}
            {!!hasFilters && (
              <IonBadge
                style={{ marginLeft: 16, color: colors.red[500] }}
                color="light"
              >
                {filtersQuantity}
              </IonBadge>
            )}
          </IonButton>
        </IonCol>
      </IonRow>

      {exercisesList.map(e => {
        return (
          <IonRow key={e.id}>
            <IonCol>
              <ExerciseCard exercise={e} />
            </IonCol>
          </IonRow>
        );
      })}

      {isExercisesEmpty && (
        <IonRow>
          <IonCol>
            <div className="ion-text-center">Nenhum exercício encontrado</div>
          </IonCol>
        </IonRow>
      )}
    </IonGrid>
  );
};

export default MyExercises;
