import React from 'react';
import { IonChip, IonLabel } from '@ionic/react';

import { Muscle } from 'types/muscles';

type Props = {
  muscle: Muscle;
};

const MuscleChip: React.FC<Props> = ({ muscle }) => {
  return (
    <IonChip style={{ background: muscle.color }} className="muscle-label">
      <IonLabel>{muscle.label}</IonLabel>
    </IonChip>
  );
};

export default MuscleChip;
