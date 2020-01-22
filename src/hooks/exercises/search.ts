import { useEffect, useState } from 'react';

import { Exercise } from 'types/exercises';

type Args = {
  exercises: Exercise[];
};

export const useExercisesSearch = (args: Args) => {
  const { exercises } = args;

  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const [searchString, setSearchString] = useState('');

  const search = (searchString: string) => setSearchString(searchString);

  useEffect(() => {
    const isExerciseInResults = (
      exercise: Exercise,
      searchString: string
    ): boolean => {
      const searchStringLength = searchString.length;

      const titleWords = exercise.title
        .trim()
        .toLowerCase()
        .split(' ');

      // Try to find match in exercise title
      for (const word of titleWords) {
        if (word.slice(0, searchStringLength) === searchString) return true;
      }

      return false;
    };

    const getFilteredExercises = (searchString: string): Exercise[] =>
      exercises.filter(exercise =>
        isExerciseInResults(exercise, searchString.trim().toLowerCase())
      );

    setFilteredExercises(getFilteredExercises(searchString));
  }, [exercises, searchString]);

  return { search, filteredBySearchExercises: filteredExercises };
};
