import React from 'react';
import { Grid } from '@material-ui/core';

import { ExerciseOption } from 'types/exercises';

type Props = {
  exerciseOption: ExerciseOption;
  showInfo?: boolean;
};

const ExerciseOptionDisplay: React.FC<Props> = ({
  exerciseOption,
  showInfo = false
}) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container>
        <h5 className="title-font">{exerciseOption.exercise.title}</h5>
      </Grid>

      {showInfo && (
        <React.Fragment>
          <Grid item container alignItems="center" style={{ paddingLeft: 32 }}>
            <Grid item>
              <div>Séries</div>
            </Grid>
            <Grid item style={{ flex: 1 }} container justify="flex-end">
              <div>{exerciseOption.info.sets}</div>
            </Grid>
          </Grid>

          <Grid item container alignItems="center" style={{ paddingLeft: 32 }}>
            <Grid item>
              <div>Repetições</div>
            </Grid>

            <Grid item style={{ flex: 1 }} container justify="flex-end">
              <div>
                {exerciseOption.info.reps[0]}-{exerciseOption.info.reps[1]}
              </div>
            </Grid>
          </Grid>

          <Grid item container alignItems="center" style={{ paddingLeft: 32 }}>
            <Grid item>
              <div> Intervalo (s) </div>
            </Grid>

            <Grid item style={{ flex: 1 }} container justify="flex-end">
              <div>
                {exerciseOption.info.restInterval[0]}-
                {exerciseOption.info.restInterval[1]}
              </div>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </Grid>
  );
};

export default ExerciseOptionDisplay;
