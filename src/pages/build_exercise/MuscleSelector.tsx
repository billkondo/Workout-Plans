import React, { useContext, useState } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';

import { BuildExerciseContext } from './BuildExercise';
import MuscleSelectorComponent from 'components/muscle_selector/MuscleSelector';
import { muscleOptions } from 'types/muscles';

const MuscleSelector = () => {
  const [isOpen, setOpen] = useState(false);
  const context = useContext(BuildExerciseContext);

  if (!context) return null;

  const { addMuscle, muscles, removeMuscle } = context;

  return (
    <React.Fragment>
      <MuscleSelectorComponent
        muscleOptions={muscleOptions}
        selectMuscle={addMuscle}
        unselectMuscle={removeMuscle}
        selectedMuscles={muscles}
        isOpen={isOpen}
        closeSelector={() => setOpen(false)}
      />

      <IonCard onClick={() => setOpen(true)}>
        <IonCardHeader>
          <IonCardTitle className="ion-padding">
            Escolher grupos musculares
          </IonCardTitle>
          <IonCardSubtitle className="ion-padding">
            Quais músculos o exercício focará
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </React.Fragment>
  );
};

export default MuscleSelector;
