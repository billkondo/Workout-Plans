import React, { useState } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';

import { muscleOptions, Muscle } from 'types/muscles';

import MuscleSelectorComponent from 'components/muscle_selector/MuscleSelector';

type Props = {
  addMuscle: (muscle: Muscle) => void;
  removeMuscle: (muscle: Muscle) => void;
  muscles: Muscle[];
};

const MuscleSelector: React.FC<Props> = ({
  addMuscle,
  removeMuscle,
  muscles
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
            Quais músculos o exercício focará
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </React.Fragment>
  );
};

export default MuscleSelector;
