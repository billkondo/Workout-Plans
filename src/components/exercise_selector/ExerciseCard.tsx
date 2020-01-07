import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonLabel
} from '@ionic/react';
import { Collapse } from '@material-ui/core';

import CheckComponent from 'components/check/Check';
import Range from 'components/input/Range';
import { ExerciseOption, Exercise, ExerciseInfo } from 'types/exercises';

type Props = {
  exercise: Exercise;

  selectExerciseOption: (exercise: Exercise) => void;
  unselectExerciseOption: (exercise: Exercise) => void;
  exerciseOption?: ExerciseOption;

  editOption: (
    key: string,
    value: number | number[],
    exercise: Exercise
  ) => void;
};

const ExerciseCard: React.FC<Props> = ({
  exercise,
  selectExerciseOption,
  unselectExerciseOption,
  exerciseOption,
  editOption
}) => {
  const isSelected = !!exerciseOption;

  const info: ExerciseInfo = exerciseOption
    ? exerciseOption.info
    : {
        reps: [0, 30],
        restInterval: [0, 30],
        sets: 30
      };

  const handleChange = (key: string) => (newValue: number | number[]) =>
    editOption(key, newValue, exercise);

  return (
    <IonCard>
      <IonCardHeader className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonGrid>
                <IonRow className="ion-align-items-center">
                  <div style={{ position: 'absolute', zIndex: 999 }}>
                    <CheckComponent
                      handleCheck={() => selectExerciseOption(exercise)}
                      handleUncheck={() => unselectExerciseOption(exercise)}
                      isSelected={isSelected}
                    />
                  </div>
                  <IonCol>
                    <IonCardTitle style={{ marginLeft: 40 }}>
                      {exercise.title}
                    </IonCardTitle>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonRow>

          <IonRow style={{ marginTop: 16 }}>
            <IonCol>
              {exercise.description && (
                <IonCardSubtitle>{exercise.description}</IonCardSubtitle>
              )}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardHeader>

      <IonCardContent className="ion-padding">
        <IonGrid style={{ padding: 0 }}>
          <IonRow>
            <IonCol style={{ padding: 0 }}>
              {exercise.muscles &&
                exercise.muscles.map(muscle => {
                  return (
                    <IonChip key={muscle.type}>
                      <IonLabel>{muscle.label}</IonLabel>
                    </IonChip>
                  );
                })}
            </IonCol>
          </IonRow>

          <IonRow style={{ marginTop: 32 }}>
            <IonCol>
              <Collapse in={isSelected}>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <Range
                        label="Séries"
                        value={info.sets}
                        handleChange={handleChange('sets')}
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow style={{ marginTop: 24 }}>
                    <IonCol>
                      <Range
                        label="Repetições"
                        value={info.reps}
                        handleChange={handleChange('reps')}
                      />
                    </IonCol>
                  </IonRow>

                  <IonRow style={{ marginTop: 24 }}>
                    <IonCol>
                      <Range
                        label="Tempo de descanso"
                        value={info.restInterval}
                        handleChange={handleChange('restInterval')}
                      />
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </Collapse>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default ExerciseCard;
