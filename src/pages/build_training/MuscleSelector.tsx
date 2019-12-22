import React, { useContext, useState } from 'react';
import {
  IonModal,
  IonContent,
  IonHeader,
  IonButtons,
  IonButton,
  IonGrid,
  IonRow,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonToolbar
} from '@ionic/react';
import { close } from 'ionicons/icons';

import MuscleSelectorComponent from 'components/muscle_selector/MuscleSelector';

import { BuildTrainingContext } from './BuildTraining';
import { Muscle, muscleOptions } from 'types/muscles';

const MuscleSelector = () => {
  const [isOpen, setOpen] = useState(false);
  const context = useContext(BuildTrainingContext);

  if (!context) return null;

  const selectMuscle = (muscle: Muscle) => context.addMuscle(muscle);
  const unselectMuscle = (muscle: Muscle) => context.removeMuscle(muscle);

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
              <MuscleSelectorComponent
                selectedMuscles={context.muscles}
                selectMuscle={selectMuscle}
                muscleOptions={muscleOptions}
                unselectMuscle={unselectMuscle}
              />
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
            Quais músculos seu treino focará
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </React.Fragment>
  );
};

export default MuscleSelector;
