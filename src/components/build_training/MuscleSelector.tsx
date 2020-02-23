import React, { useState } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';

import MuscleSelectorComponent from 'components/muscle_selector/MuscleSelector';

import { Muscle, muscleOptions } from 'types/muscles';

type Props = {
  muscles: Muscle[];

  addMuscle: (muscle: Muscle) => void;
  removeMuscle: (muscle: Muscle) => void;
};

const MuscleSelector: React.FC<Props> = ({
  muscles,
  addMuscle,
  removeMuscle
}) => {
  const [isOpen, setOpen] = useState(false);

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
          <IonCardTitle className="ion-padding sub-header-font">
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
