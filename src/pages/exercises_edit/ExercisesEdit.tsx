import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import BuildExercise from 'components/build_exercise/BuildExercise';

import { useExerciseBuild } from 'hooks/exercises/build';
import { useExercisesGetter } from 'hooks/exercises/getter';

import routes from 'config/routes';

interface Props extends RouteComponentProps<{ id: string }> {}

const ExercisesEdit: React.FC<Props> = ({ match }) => {
  const { findExerciseByID } = useExercisesGetter();
  const exercise = findExerciseByID(match.params.id);
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
      backRoute={routes.exercises.view(match.params.id)}
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
