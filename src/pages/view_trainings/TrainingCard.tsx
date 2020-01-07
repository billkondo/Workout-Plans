import React, { useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonLabel
} from '@ionic/react';
import { Collapse } from '@material-ui/core';

import { Training } from 'types/training';

import DatesDisplay from './DatesDisplay';
import ExerciseOptionDisplay from './ExerciseOptionDisplay';

type Props = {
  training: Training;
};

const TrainingCard: React.FC<Props> = ({ training }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <IonCard onClick={() => setIsSelected(!isSelected)}>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <DatesDisplay dates={training.dates} />
            </IonCol>
          </IonRow>

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

          <Collapse in={isSelected}>
            <IonRow className="ion-padding">
              <IonCol>
                {training.exerciseOptions.map(e => {
                  return (
                    <div
                      key={e.exercise.id}
                      style={{ marginTop: 16, marginBottom: 8 }}
                    >
                      <ExerciseOptionDisplay exerciseOption={e} />
                    </div>
                  );
                })}
              </IonCol>
            </IonRow>
          </Collapse>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default TrainingCard;
