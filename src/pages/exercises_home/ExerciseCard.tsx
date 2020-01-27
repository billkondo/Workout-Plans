import React, { useState } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonChip,
  IonLabel,
  IonTextarea,
  IonIcon,
  IonRouterLink
} from '@ionic/react';
import { Collapse, Grid, Grow } from '@material-ui/core';
import { settings } from 'ionicons/icons';

import routes from 'config/routes';
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
        <IonCardTitle className="title-font">{exercise.title}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <Grid container direction="column" spacing={2}>
          {!!exercise.description && (
            <Collapse in={isSelected}>
              <Grid item container>
                <IonTextarea
                  value={exercise.description}
                  readonly
                  autoGrow={true}
                />
              </Grid>
            </Collapse>
          )}

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
            <Grow in={isSelected}>
              <IonRouterLink
                routerLink={routes.exercises.view(exercise.id)}
                routerDirection="forward"
              >
                <IonIcon icon={settings}></IonIcon>
              </IonRouterLink>
            </Grow>
          </Grid>
        </Grid>
      </IonCardContent>
    </IonCard>
  );
};

export default ExerciseCard;
