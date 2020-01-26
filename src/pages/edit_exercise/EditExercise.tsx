import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import BuildExercise from 'components/build_exercise/BuildExercise';

import routes from 'config/routes';

interface Props extends RouteComponentProps<{ id: string }> {}

const EditExercise: React.FC<Props> = ({ match }) => {
  return (
    <BuildExercise
      headerTitle="Editando exercício"
      backRoute={routes.exercises.view.exercise(match.params.id)}
      buttonLabel="Salvar mudanças"
      build={async () => {
        return false;
      }}
      title=""
      description=""
      muscles={[]}
      errors={{}}
      addMuscle={() => {}}
      removeMuscle={() => {}}
      changeText={() => {}}
      failed={false}
      ignoreFailed={() => {}}
    />
  );
};

export default EditExercise;
