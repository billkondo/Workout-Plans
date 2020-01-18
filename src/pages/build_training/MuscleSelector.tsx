import React, { useContext, useState } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';

import MuscleSelectorComponent from 'components/muscle_selector/MuscleSelector';

import { BuildTrainingContext } from './BuildTraining';
import { Muscle, muscleOptions } from 'types/muscles';

const MuscleSelector = () => {
  const [isOpen, setOpen] = useState(false);
  const context = useContext(BuildTrainingContext);

  if (!context) return null;

  const selectMuscle = (muscle: Muscle) => context.addMuscle(muscle);
  const unselectMuscle = (muscle: Muscle) => context.removeMuscle(muscle);

  return (
    <React.Fragment>
      <MuscleSelectorComponent
        muscleOptions={muscleOptions}
        selectMuscle={selectMuscle}
        unselectMuscle={unselectMuscle}
        selectedMuscles={context.muscles}
        isOpen={isOpen}
        closeSelector={() => setOpen(false)}
      />

      <IonCard onClick={() => setOpen(true)}>
        <IonCardHeader>
          <IonCardTitle className="ion-padding">
            Escolher grupos musculares
          </IonCardTitle>
          <IonCardSubtitle className="ion-padding">
            Quais músculos seu treino focará
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </React.Fragment>
  );
};

export default MuscleSelector;
