import React, { useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { Collapse, Grow } from '@material-ui/core';
import { settings } from 'ionicons/icons';

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
        <Grow in={isSelected}>
          <div style={{ position: 'absolute', right: 0, top: 0, margin: 16 }}>
            <IonIcon icon={settings}></IonIcon>
          </div>
        </Grow>

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
