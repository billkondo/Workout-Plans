import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';
import { Collapse } from '@material-ui/core';

import CheckComponent from 'components/check/Check';
import SubMuscleLine from 'components/muscle_selector/SubMuscleLine';
import { MuscleOption, Muscle } from 'types/muscles';

type Prop = {
  muscleOption: MuscleOption;
  selectedMuscles: Array<Muscle>;
  selectMuscle: (muscle: Muscle) => void;
  unselectMuscle: (muscle: Muscle) => void;
};

const MuscleCard: React.FC<Prop> = ({
  muscleOption,
  selectedMuscles,
  selectMuscle,
  unselectMuscle
}) => {
  const isMuscleSelected = (muscle: Muscle) =>
    !!selectedMuscles.find(m => m.type === muscle.type);

  const isMainMuscleSelected = isMuscleSelected(muscleOption.muscle);

  const hasSubMuscles = muscleOption.subMuscles.length > 0;

  return (
    <IonCard>
      <IonCardHeader className="ion-padding">
        <IonGrid style={{ padding: 0 }}>
          <IonRow className="ion-align-items-center">
            <div style={{ position: 'absolute', zIndex: 999, marginTop: 2 }}>
              <CheckComponent
                isSelected={isMainMuscleSelected}
                handleCheck={() => selectMuscle(muscleOption.muscle)}
                handleUncheck={() => {
                  unselectMuscle(muscleOption.muscle);
                  for (const muscle of muscleOption.subMuscles)
                    unselectMuscle(muscle);
                }}
              />
            </div>

            <IonCol style={{ padding: 0 }}>
              <IonCardTitle style={{ marginLeft: 40 }}>
                {muscleOption.muscle.label}
              </IonCardTitle>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardHeader>

      {hasSubMuscles && (
        <Collapse in={isMainMuscleSelected}>
          <IonCardContent className="ion-padding">
            <IonGrid style={{ padding: 0 }}>
              {muscleOption.subMuscles.map(subMuscle => {
                return (
                  <IonRow key={subMuscle.type}>
                    <IonCol style={{ padding: 0 }}>
                      <SubMuscleLine
                        subMuscle={subMuscle}
                        isSelected={isMuscleSelected(subMuscle)}
                        selectMuscle={() => selectMuscle(subMuscle)}
                        unselectMuscle={() => unselectMuscle(subMuscle)}
                      />
                    </IonCol>
                  </IonRow>
                );
              })}
            </IonGrid>
          </IonCardContent>
        </Collapse>
      )}
    </IonCard>
  );
};

export default MuscleCard;
