import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { useTrainingsGetter } from 'hooks/trainings/getter';

import NotFound from './NotFound';
import Training from './Training';

interface Props extends RouteComponentProps<{ id: string }> {}

const TrainingsView: React.FC<Props> = ({ match }) => {
  const { findTrainingByID } = useTrainingsGetter();
  const id = match.params.id;
  const training = findTrainingByID(id);

  if (!training) return <NotFound />;

  return <Training training={training} />;
};

export default TrainingsView;
