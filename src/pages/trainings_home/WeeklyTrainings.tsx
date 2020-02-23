import React, { useRef, useState } from 'react';
import { Grid } from '@material-ui/core';
import throttle from 'lodash/throttle';

import DailyTrainingCard from './DailyTrainingCard';
import DailyTrainingCardModal from './DailyTrainingCardModal';

import { useTrainingsGetter } from 'hooks/trainings/getter';
import { useWeeklyTrainings } from 'hooks/weekly_trainings';
import { DailyTraining } from 'types/training';

const WeeklyTrainings = () => {
  const { trainings } = useTrainingsGetter();
  const { weeklyTrainings } = useWeeklyTrainings(trainings);
  const [
    selectedDailyTraining,
    setSelectedDailyTraining
  ] = useState<DailyTraining | null>(null);
  const scroller = useRef<HTMLDivElement>(null);

  const selectDailyTraining = (dailyTraining: DailyTraining) =>
    setSelectedDailyTraining(dailyTraining);
  const unselectDailyTraining = () => setSelectedDailyTraining(null);

  const loadWeeks = throttle(() => {
    if (scroller.current) {
      console.log(scroller.current.scrollLeft);
      const hasReachedStart = scroller.current.scrollLeft === 0;

      const hasReachedEnd =
        scroller.current.scrollWidth - scroller.current.offsetWidth ===
        scroller.current.scrollLeft;

      // console.log(hasReachedStart, hasReachedEnd);

      if (hasReachedStart) {
        console.log('start');
      }
    }
  }, 100);

  return (
    <Grid container direction="column">
      <Grid item container justify="center">
        <h5 className="header-font"> Treinos da Semana </h5>
      </Grid>

      <Grid item container>
        <div
          id="horizontal-scroll"
          className="scrolling-wrapper"
          style={{
            flexWrap: 'nowrap',
            width: 'auto',
            overflowX: 'auto',
            display: 'flex'
          }}
          onScroll={loadWeeks}
          ref={scroller}
        >
          {weeklyTrainings.map(t => {
            return (
              <div style={{ flex: '0 0 auto' }} key={t.date}>
                <DailyTrainingCard
                  dailyTraining={t}
                  selectDailyTraining={selectDailyTraining}
                ></DailyTrainingCard>
              </div>
            );
          })}
        </div>
      </Grid>

      <DailyTrainingCardModal
        dailyTraining={selectedDailyTraining}
        closeModal={unselectDailyTraining}
      ></DailyTrainingCardModal>
    </Grid>
  );
};

export default WeeklyTrainings;
