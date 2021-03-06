import React from 'react';

import routes from 'config/routes';

// Components
import BuildTraining from 'components/build_training/BuildTraining';

import { useTrainingsBuild } from 'hooks/trainings/build';

const TrainingsCreate = () => {
  const {
    state,
    addMuscle,
    removeMuscle,
    addExerciseOption,
    removeExerciseOption,
    editExerciseOptionInfo,
    addDate,
    removeDate,
    editDate,
    createTraining,
    ignoreFailed,
    isBuilding
  } = useTrainingsBuild();

  return (
    <BuildTraining
      headerTitle="Criando treino"
      backRoute={routes.home.training}
      buttonLabel="Criar treino"
      build={createTraining}
      muscles={state.muscles}
      exercisesOptions={state.exerciseOptions}
      dates={state.dates}
      addMuscle={addMuscle}
      removeMuscle={removeMuscle}
      addExerciseOption={addExerciseOption}
      removeExerciseOption={removeExerciseOption}
      editExerciseOptionInfo={editExerciseOptionInfo}
      addDate={addDate}
      removeDate={removeDate}
      editDate={editDate}
      dayToOpen={state.dayToOpen}
      failed={state.failed}
      failMessage="Não foi possível criar treino"
      isLoading={isBuilding}
      loadingMessage="Criando treino"
      ignoreFailed={ignoreFailed}
      errors={state.errors}
    />
  );
};

export default TrainingsCreate;
