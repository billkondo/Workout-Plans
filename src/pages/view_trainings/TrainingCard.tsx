import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonLabel
} from '@ionic/react';

import { Training } from 'types/training';

type Props = {
  training: Training;
};

const TrainingCard: React.FC<Props> = ({ training }) => {
  return (
    <IonCard>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              {training.muscles.map(m => {
                return (
                  <IonChip key={m.type}>
                    <IonLabel>{m.label}</IonLabel>
                  </IonChip>
                );
              })}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default TrainingCard;
