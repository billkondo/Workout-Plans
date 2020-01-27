import React from 'react';
import { IonChip, IonLabel } from '@ionic/react';

import { Muscle } from 'types/muscles';

type Props = {
  muscles: Muscle[];
};

const MusclesList: React.FC<Props> = ({ muscles }) => {
  return (
    <div>
      {muscles.map(m => {
        return (
          <IonChip key={m.type}>
            <IonLabel>{m.label}</IonLabel>
          </IonChip>
        );
      })}
    </div>
  );
};

export default MusclesList;
