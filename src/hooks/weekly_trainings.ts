import { useState, useEffect } from 'react';

import { Training, DailyTraining } from 'types/training';

import {
  currentDate,
  addDaysToDate,
  extractTrainingsWithCertainDate
} from 'utils/dates';

export const useWeeklyTrainings = (trainings: Training[]) => {
  const [weeklyTrainings, setWeeklyTrainings] = useState<DailyTraining[]>([]);

  useEffect(() => {
    const initWeeklyTrainings = () => {
      const days: DailyTraining[] = [];

      for (let d = 0; d < 7; d++) {
        const newDate = addDaysToDate(currentDate(), d);

        days.push({
          date: newDate,
          trainings: extractTrainingsWithCertainDate(trainings, newDate)
        });
      }

      setWeeklyTrainings(days);
    };
    initWeeklyTrainings();
  }, [trainings]);

  const loadTrainings = () => {};

  return {
    loadTrainings,
    weeklyTrainings
  };
};
