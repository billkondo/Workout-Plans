import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, IonChip, IonLabel } from '@ionic/react';
import { IconButton } from '@material-ui/core';
import { Settings } from '@material-ui/icons';

import ExerciseSelectorComponent from 'components/exercise_selector/ExerciseSelector';

import { ExerciseOption, Exercise } from 'types/exercises';

type Props = {
  exercises: ExerciseOption[];
  addExercise: (exercise: Exercise) => void;
  removeExercise: (exercise: Exercise) => void;
};

const ExerciseFilter: React.FC<Props> = ({
  exercises,
  addExercise,
  removeExercise
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <IonGrid>
      <ExerciseSelectorComponent
        isOpen={isOpen}
        closeSelector={() => setOpen(false)}
        selectExerciseOption={addExercise}
        selectedExercisesOptions={exercises}
        unselectExerciseOption={removeExercise}
      />

      <IonRow>
        <IonCol>
          <div className="title-font" style={{ display: 'inline-block' }}>
            Filtrar por exercício
          </div>

          <IconButton
            style={{ display: 'inline-block', marginLeft: 8 }}
            onClick={() => setOpen(true)}
          >
            <Settings />
          </IconButton>
        </IonCol>
      </IonRow>

      {exercises.length === 0 && (
        <IonRow>
          <IonCol>
            <div>Nenhum exercício selecionado</div>
          </IonCol>
        </IonRow>
      )}

      {exercises.length !== 0 && (
        <IonRow>
          <IonCol>
            {exercises.map(e => {
              return (
                <IonChip key={e.exercise.id}>
                  <IonLabel>{e.exercise.title}</IonLabel>
                </IonChip>
              );
            })}
          </IonCol>
        </IonRow>
      )}
    </IonGrid>
  );
};

export default ExerciseFilter;
