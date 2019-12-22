import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

import MuscleCard from 'components/muscle_selector/MuscleCard';

import { Muscle, MuscleOption } from 'types/muscles';

type Props = {
  selectMuscle: (muscle: Muscle) => void;
  unselectMuscle: (muscle: Muscle) => void;
  muscleOptions: Array<MuscleOption>;
  selectedMuscles: Array<Muscle>;
};

const MuscleSelector: React.FC<Props> = ({
  muscleOptions,
  selectMuscle,
  selectedMuscles,
  unselectMuscle
}) => {
  return (
    <IonGrid>
      {muscleOptions.map(option => {
        return (
          <IonRow key={option.muscle.type}>
            <IonCol>
              <MuscleCard
                muscleOption={option}
                selectedMuscles={selectedMuscles}
                selectMuscle={selectMuscle}
                unselectMuscle={unselectMuscle}
              />
            </IonCol>
          </IonRow>
        );
      })}
    </IonGrid>
  );
};

export default MuscleSelector;
