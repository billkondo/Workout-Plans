import { format, parseISO, addDays, parse } from 'date-fns';

import { AppDate } from 'types/dates';
import { Training } from 'types/training';

export const currentDate = (formatString = 'dd/MM/yyyy'): string =>
  format(new Date(), formatString);

export const addDaysToDate = (
  date: string,
  days: number,
  formatString = 'dd/MM/yyyy'
) => format(addDays(parse(date, formatString, new Date()), days), formatString);

export const formatAppDate = (
  appDate: AppDate,
  formatString = 'dd/MM/yyyy'
): string => format(parseISO(appDate.value), formatString);

export const extractTrainingsWithCertainDate = (
  trainings: Training[],
  date: string
): Training[] => {
  const selectedTrainings: Training[] = [];

  for (const training of trainings) {
    const isTrainingOK = (): boolean => {
      for (const d of training.dates)
        if (formatAppDate(d) === date) return true;
      return false;
    };
    if (isTrainingOK()) selectedTrainings.push(training);
  }

  return selectedTrainings;
};
