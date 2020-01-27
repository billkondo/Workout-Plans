import React, { useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonChip,
  IonLabel,
  IonIcon,
  IonRouterLink
} from '@ionic/react';
import { Collapse, Grow, Grid } from '@material-ui/core';
import { settings } from 'ionicons/icons';

import { Training } from 'types/training';

import DatesList from 'components/trainings/DatesList';
import MusclesList from 'components/trainings/MusclesList';
import ExercisesOptionsList from 'components/trainings/ExercisesOptionsList';

import routes from 'config/routes';

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
            <IonRouterLink
              routerDirection="forward"
              routerLink={routes.trainings.view(training.id)}
            >
              <IonIcon icon={settings}></IonIcon>
            </IonRouterLink>
          </div>
        </Grow>

        <Grid container direction="column" spacing={1}>
          <Grid item container>
            <DatesList dates={training.dates} />
          </Grid>

          <Grid item container>
            <MusclesList muscles={training.muscles} />
          </Grid>

          <Collapse in={isSelected}>
            <ExercisesOptionsList exercisesOptions={training.exerciseOptions} />
          </Collapse>
        </Grid>
      </IonCardContent>
    </IonCard>
  );
};

export default TrainingCard;
