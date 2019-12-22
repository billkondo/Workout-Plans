import React from 'react';
import { Icon } from '@material-ui/core';
import { CheckCircle, RadioButtonUnchecked } from '@material-ui/icons';

type Props = {
  isSelected: boolean;
  handleCheck: () => void;
  handleUncheck: () => void;
  isSmall?: boolean;
};

const Check: React.FC<Props> = ({
  isSelected,
  handleCheck,
  handleUncheck,
  isSmall = false
}) => {
  const handleClick = isSelected ? handleUncheck : handleCheck;

  return (
    <Icon onClick={handleClick}>
      {isSelected ? (
        <CheckCircle fontSize={isSmall ? 'small' : 'default'} />
      ) : (
        <RadioButtonUnchecked fontSize={isSmall ? 'small' : 'default'} />
      )}
    </Icon>
  );
};

export default Check;
