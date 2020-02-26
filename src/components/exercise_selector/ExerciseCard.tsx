import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { Collapse } from '@material-ui/core';

import CheckComponent from 'components/check/Check';
import Range from 'components/input/Range';
import { ExerciseOption, Exercise, ExerciseInfo } from 'types/exercises';

import MuscleChip from 'components/MuscleChip';

type Props = {
  exercise: Exercise;

  selectExerciseOption: (exercise: Exercise) => void;
  unselectExerciseOption: (exercise: Exercise) => void;
  exerciseOption?: ExerciseOption;

  editOption?: (
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

  const handleChange = (key: string) => (newValue: number | number[]) => {
    if (!!editOption) editOption(key, newValue, exercise);
  };

  const hasDescription = !!exercise.description;

  return (
    <IonCard>
      <IonCardHeader className="ion-padding">
        <IonGrid style={{ padding: 0 }}>
          <IonRow>
            <IonCol style={{ padding: 0 }}>
              <IonGrid style={{ padding: 0 }}>
                <IonRow className="ion-align-items-center">
                  <div
                    style={{ position: 'absolute', zIndex: 999, marginTop: 2 }}
                  >
                    <CheckComponent
                      handleCheck={() => selectExerciseOption(exercise)}
                      handleUncheck={() => unselectExerciseOption(exercise)}
                      isSelected={isSelected}
                    />
                  </div>
                  <IonCol style={{ padding: 0 }}>
                    <IonCardTitle style={{ marginLeft: 40 }}>
                      {exercise.title}
                    </IonCardTitle>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonRow>

          {hasDescription && (
            <IonRow style={{ marginTop: 16 }}>
              <IonCol>
                <IonCardSubtitle>{exercise.description}</IonCardSubtitle>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonCardHeader>

      <IonCardContent className="ion-padding">
        <IonGrid style={{ padding: 0 }}>
          <IonRow>
            <IonCol style={{ padding: 0 }}>
              {exercise.muscles &&
                exercise.muscles.map(muscle => {
                  return <MuscleChip key={muscle.type} muscle={muscle}></MuscleChip>;
                })}
            </IonCol>
          </IonRow>

          <Collapse in={isSelected && !!editOption}>
            <IonRow style={{ marginTop: 32 }}>
              <IonCol>
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
              </IonCol>
            </IonRow>
          </Collapse>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default ExerciseCard;
