import React from 'react';
import { IonGrid, IonRow, IonCol, IonCardSubtitle } from '@ionic/react';

import Check from 'components/check/Check';

import { Muscle } from 'types/muscles';

type Prop = {
  subMuscle: Muscle;
  isSelected: boolean;
  selectMuscle: () => void;
  unselectMuscle: () => void;
};

const SubMuscleLine: React.FC<Prop> = ({
  subMuscle,
  selectMuscle,
  unselectMuscle,
  isSelected
}) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol style={{ alignSelf: 'center' }} size="2">
          <Check
            isSelected={isSelected}
            handleCheck={selectMuscle}
            handleUncheck={unselectMuscle}
            isSmall={true}
          />
        </IonCol>
        <IonCol style={{ alignSelf: 'center' }} size="10">
          <IonCardSubtitle>{subMuscle.label}</IonCardSubtitle>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default SubMuscleLine;
