import React from 'react';
import { useParams } from 'react-router';

import BuildExercise from 'components/build_exercise/BuildExercise';

import { useExerciseBuild } from 'hooks/exercises/build';
import { useExercisesGetter } from 'hooks/exercises/getter';

import routes from 'config/routes';

const ExercisesEdit = () => {
  const { id } = useParams();
  const { findExerciseByID } = useExercisesGetter();
  const exercise = findExerciseByID(id);
  const {
    state,
    addMuscle,
    removeMuscle,
    changeText,
    ignoreFailed,
    editExercise,
    isBuilding
  } = useExerciseBuild(exercise);

  return (
    <BuildExercise
      headerTitle="Editando exercício"
      backRoute={routes.exercises.view(id)}
      buttonLabel="Salvar mudanças"
      build={editExercise}
      title={state.title}
      description={state.description}
      muscles={state.muscles}
      errors={state.errors}
      addMuscle={addMuscle}
      removeMuscle={removeMuscle}
      changeText={changeText}
      failed={state.failed}
      ignoreFailed={ignoreFailed}
      failMessage="Não foi possível editar exercício"
      isLoading={isBuilding}
      loadingMessage={'Editando exercício'}
    />
  );
};

export default ExercisesEdit;
