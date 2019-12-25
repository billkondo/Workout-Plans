import React from 'react';
import { IonGrid, IonRow, IonCol, IonCardSubtitle } from '@ionic/react';

import CheckComponent from 'components/check/Check';

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
      <IonRow className="ion-align-items-center">
        <div style={{ position: 'absolute', zIndex: 999 }}>
          <CheckComponent
            isSelected={isSelected}
            handleCheck={selectMuscle}
            handleUncheck={unselectMuscle}
            isSmall={true}
          />
        </div>

        <IonCol>
          <IonCardSubtitle style={{ marginLeft: 32 }}>
            {subMuscle.label}
          </IonCardSubtitle>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default SubMuscleLine;
