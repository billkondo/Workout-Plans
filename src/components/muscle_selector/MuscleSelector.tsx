import React, { useState } from 'react';
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
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';
import { close } from 'ionicons/icons';

import MuscleCard from 'components/muscle_selector/MuscleCard';

import { Muscle, MuscleOption } from 'types/muscles';

type Props = {
  selectMuscle: (muscle: Muscle) => void;
  unselectMuscle: (muscle: Muscle) => void;
  muscleOptions: Array<MuscleOption>;
  selectedMuscles: Array<Muscle>;
  description?: string;
};

const MuscleSelector: React.FC<Props> = ({
  muscleOptions,
  selectMuscle,
  selectedMuscles,
  unselectMuscle,
  description
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <IonModal isOpen={isOpen} onDidDismiss={() => setOpen(false)}>
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton onClick={() => setOpen(false)}>
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

      <IonCard onClick={() => setOpen(true)}>
        <IonCardHeader>
          <IonCardTitle className="ion-padding">
            Escolher grupos musculares
          </IonCardTitle>
          <IonCardSubtitle className="ion-padding">
            {!!description ? description : ' Quais músculos seu treino focará'}
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </React.Fragment>
  );
};

export default MuscleSelector;
