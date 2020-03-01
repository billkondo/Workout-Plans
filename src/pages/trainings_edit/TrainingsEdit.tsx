import React from 'react';
import { useParams } from 'react-router';

import BuildTraining from 'components/build_training/BuildTraining';

import routes from 'config/routes';

import { useTrainingsBuild } from 'hooks/trainings/build';
import { useTrainingsGetter } from 'hooks/trainings/getter';

const TrainingsEdit = () => {
  const { id } = useParams();
  const { findTrainingByID } = useTrainingsGetter();
  const training = findTrainingByID(id);
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
    ignoreFailed,
    isBuilding,
    editTraining
  } = useTrainingsBuild(training);

  return (
    <BuildTraining
      headerTitle="Editando treino"
      backRoute={routes.trainings.view(id)}
      buttonLabel="Editar treino"
      build={editTraining}
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
      ignoreFailed={ignoreFailed}
      failMessage="Não foi possível editar treino"
      isLoading={isBuilding}
      loadingMessage="Editando treino"
      errors={state.errors}
    />
  );
};

export default TrainingsEdit;
