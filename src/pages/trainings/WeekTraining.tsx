import React from 'react';
import { Grid } from '@material-ui/core';

import TrainingCard from './TraningCard';

const WeekTraining = () => {
  return (
    <Grid container direction="column">
      <Grid item container justify="center">
        <h5 className="header-font"> Treinos da Semana </h5>
      </Grid>

      <Grid item container>
        <div
          className="scrolling-wrapper"
          style={{
            flexWrap: 'nowrap',
            width: 'auto',
            overflowX: 'auto',
            display: 'flex'
          }}
        >
          <div style={{ flex: '0 0 auto' }}>
            <TrainingCard></TrainingCard>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <TrainingCard></TrainingCard>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <TrainingCard></TrainingCard>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <TrainingCard></TrainingCard>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <TrainingCard></TrainingCard>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <TrainingCard></TrainingCard>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <TrainingCard></TrainingCard>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <TrainingCard></TrainingCard>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <TrainingCard></TrainingCard>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <TrainingCard></TrainingCard>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default WeekTraining;
