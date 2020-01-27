import React from 'react';
import { Grid } from '@material-ui/core';

import { ExerciseOption } from 'types/exercises';

import ExerciseOptionShowInfo from './ExerciseOptionShowInfo';

type Props = {
  exercisesOptions: ExerciseOption[];
  showInfo?: boolean;
};

const ExercisesOptionsList: React.FC<Props> = ({
  exercisesOptions,
  showInfo = false
}) => {
  return (
    <Grid
      item
      container
      className="ion-padding"
      direction="column"
      spacing={showInfo ? 3 : 1}
    >
      {exercisesOptions.map(e => {
        return (
          <Grid item container key={e.exercise.id}>
            <ExerciseOptionShowInfo exerciseOption={e} showInfo={showInfo} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ExercisesOptionsList;
