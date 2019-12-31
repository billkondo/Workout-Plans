import React, { useState } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonChip,
  IonLabel,
  IonTextarea,
  IonIcon
} from '@ionic/react';
import { Collapse, Grid, Grow } from '@material-ui/core';
import { eye } from 'ionicons/icons';

import { Exercise } from 'types/exercises';

type Props = {
  exercise: Exercise;
};

const ExerciseCard: React.FC<Props> = ({ exercise }) => {
  const [isSelected, setSelected] = useState(false);

  const onCardClick = () => setSelected(!isSelected);

  return (
    <IonCard onClick={onCardClick}>
      <IonCardHeader>
        <IonCardTitle>{exercise.title}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item container>
            {!!exercise.description && (
              <Collapse in={isSelected}>
                <IonTextarea
                  value={exercise.description}
                  readonly
                  autoGrow={true}
                />
              </Collapse>
            )}
          </Grid>

          <Grid item container>
            {exercise.muscles.map(m => {
              return (
                <IonChip key={m.type}>
                  <IonLabel>{m.label}</IonLabel>
                </IonChip>
              );
            })}
          </Grid>

          <Grid item container justify="flex-end">
            {
              <Grow in={isSelected}>
                <IonIcon icon={eye}></IonIcon>
              </Grow>
            }
          </Grid>
        </Grid>
      </IonCardContent>
    </IonCard>
  );
};

export default ExerciseCard;
