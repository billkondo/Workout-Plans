import React from 'react';

import { Muscle } from 'types/muscles';

import MuscleChip from 'components/MuscleChip';

type Props = {
  muscles: Muscle[];
};

const MusclesList: React.FC<Props> = ({ muscles }) => {
  return (
    <div>
      {muscles.map(m => {
        return <MuscleChip key={m.type} muscle={m}></MuscleChip>;
      })}
    </div>
  );
};

export default MusclesList;
