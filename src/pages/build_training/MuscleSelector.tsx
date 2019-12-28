import React, { useContext } from 'react';

import MuscleSelectorComponent from 'components/muscle_selector/MuscleSelector';

import { BuildTrainingContext } from './BuildTraining';
import { Muscle, muscleOptions } from 'types/muscles';

const MuscleSelector = () => {
  const context = useContext(BuildTrainingContext);

  if (!context) return null;

  const selectMuscle = (muscle: Muscle) => context.addMuscle(muscle);
  const unselectMuscle = (muscle: Muscle) => context.removeMuscle(muscle);

  return (
    <MuscleSelectorComponent
      muscleOptions={muscleOptions}
      selectMuscle={selectMuscle}
      unselectMuscle={unselectMuscle}
      selectedMuscles={context.muscles}
    />
  );
};

export default MuscleSelector;
