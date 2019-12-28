import React, { useContext } from 'react';

import { BuildExerciseContext } from './BuildExercise';
import MuscleSelectorComponent from 'components/muscle_selector/MuscleSelector';
import { muscleOptions } from 'types/muscles';

const MuscleSelector = () => {
  const context = useContext(BuildExerciseContext);

  if (!context) return null;

  const { addMuscle, muscles, removeMuscle } = context;

  return (
    <MuscleSelectorComponent
      muscleOptions={muscleOptions}
      selectMuscle={addMuscle}
      unselectMuscle={removeMuscle}
      selectedMuscles={muscles}
      description="Quais músculos o exercício focará"
    />
  );
};

export default MuscleSelector;
