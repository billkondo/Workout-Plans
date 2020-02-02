import React from 'react';

import BuildExercise from 'components/build_exercise/BuildExercise';

import { useExerciseBuild } from 'hooks/exercises/build';
import { useExercisesGetter } from 'hooks/exercises/getter';

const ExercisesCreate = () => {
  const {
    addMuscle,
    removeMuscle,
    state,
    changeText,
    createExercise,
    ignoreFailed,
    isBuilding
  } = useExerciseBuild();
  const { backRoute } = useExercisesGetter();

  return (
    <BuildExercise
      title={state.title}
      description={state.description}
      muscles={state.muscles}
      backRoute={backRoute}
      buttonLabel="Criar exercício"
      headerTitle="Montando exercício"
      errors={state.errors}
      build={createExercise}
      addMuscle={addMuscle}
      removeMuscle={removeMuscle}
      changeText={changeText}
      failed={state.failed}
      ignoreFailed={ignoreFailed}
      failMessage="Não foi possível criar exercício"
      isLoading={isBuilding}
      loadingMessage={'Criando exercício'}
    />
  );
};

export default ExercisesCreate;
