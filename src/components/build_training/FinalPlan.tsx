import React from 'react';
import { IonGrid, IonRow, IonCol, IonChip, IonLabel } from '@ionic/react';
import { format } from 'date-fns';
import { colors } from '@material-ui/core';

import { ExerciseOption } from 'types/exercises';
import { Muscle } from 'types/muscles';
import { AppDate } from 'types/dates';
import { TrainingError } from 'types/training';

type Props = {
  muscles: Muscle[];
  exercisesOptions: ExerciseOption[];
  dates: AppDate[];
  errors: TrainingError;
};

const FinalPlan: React.FC<Props> = ({
  muscles,
  exercisesOptions,
  dates,
  errors
}) => {
  const isMusclesOK = !errors.muscles;
  const isExerciseOptionsOK = !errors.exerciseOptions;
  const isDatesOK = !errors.dates;

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <h3 className="ion-text-center header-font  ">Treino final</h3>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h6 className="sub-header-font">Grupos musculares</h6>
              </IonCol>
            </IonRow>

            {!isMusclesOK && (
              <IonRow style={{ color: colors.red.A700 }}>
                <IonCol>{errors.muscles}</IonCol>
              </IonRow>
            )}

            {isMusclesOK && muscles.length === 0 && (
              <IonRow>
                <IonCol>Nenhum músculo selecionado</IonCol>
              </IonRow>
            )}

            {muscles.map(m => {
              return (
                <IonChip key={m.type}>
                  <IonLabel>{m.label}</IonLabel>
                </IonChip>
              );
            })}

            <IonRow></IonRow>
          </IonGrid>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h6 className="sub-header-font">Exercícios</h6>
              </IonCol>
            </IonRow>

            {!isExerciseOptionsOK && (
              <IonRow style={{ color: colors.red.A700 }}>
                <IonCol>{errors.exerciseOptions}</IonCol>
              </IonRow>
            )}

            {isExerciseOptionsOK && exercisesOptions.length === 0 && (
              <IonRow>
                <IonCol>Nenhum exercício selecionado</IonCol>
              </IonRow>
            )}

            {exercisesOptions.map(e => {
              return (
                <IonChip key={e.exercise.id}>
                  <IonLabel>{e.exercise.title}</IonLabel>
                </IonChip>
              );
            })}

            <IonRow></IonRow>
          </IonGrid>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h6 className="sub-header-font">Dias</h6>
              </IonCol>
            </IonRow>

            {!isDatesOK && (
              <IonRow style={{ color: colors.red.A700 }}>
                <IonCol>{errors.dates}</IonCol>
              </IonRow>
            )}

            {isDatesOK && dates.length === 0 && (
              <IonRow>
                <IonCol>Nenhum dia selecionado</IonCol>
              </IonRow>
            )}

            {dates.map(d => {
              if (!d.value) return null;
              const formatedString = format(Date.parse(d.value), 'dd/MM/yyyy');
              return <IonChip key={d.id}>{formatedString}</IonChip>;
            })}

            <IonRow></IonRow>
          </IonGrid>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default FinalPlan;
