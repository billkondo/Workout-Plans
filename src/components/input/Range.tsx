import React, { useState, useEffect } from 'react';
import { Typography, Slider } from '@material-ui/core';

type Props = {
  label: string;
  value: number | number[];

  handleChange: (newVlaue: number | number[]) => void;
};

const Range: React.FC<Props> = ({ label, value, handleChange }) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    setState(value);
  }, [value]);

  return (
    <div>
      <Typography gutterBottom>{label}</Typography>
      <Slider
        min={0}
        max={30}
        valueLabelDisplay="auto"
        marks={[
          { value: 0, label: 0 },
          { value: 30, label: 30 }
        ]}
        value={state}
        onChange={(e, newValue) => setState(newValue)}
        onChangeCommitted={(e, newValue) => handleChange(newValue)}
      />
    </div>
  );
};

export default Range;
