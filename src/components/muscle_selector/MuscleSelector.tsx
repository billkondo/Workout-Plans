import React from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonModal,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/react';
import { close } from 'ionicons/icons';

import MuscleCard from 'components/muscle_selector/MuscleCard';

import { Muscle, MuscleOption } from 'types/muscles';

type Props = {
  selectMuscle: (muscle: Muscle) => void;
  unselectMuscle: (muscle: Muscle) => void;
  muscleOptions: Array<MuscleOption>;
  selectedMuscles: Array<Muscle>;

  isOpen: boolean;
  closeSelector: () => void;
};

const MuscleSelector: React.FC<Props> = ({
  muscleOptions,
  selectMuscle,
  selectedMuscles,
  unselectMuscle,
  isOpen,
  closeSelector
}) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={closeSelector}>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={closeSelector}>
                <IonIcon icon={close}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonGrid class="ion-padding">
          <IonRow>
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
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default MuscleSelector;
