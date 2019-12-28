import React, { useContext } from 'react';

import TextSelectorComponent from 'components/text_selector/TextSelector';
import { BuildExerciseContext } from './BuildExercise';
import { ExerciseTextKeys } from 'types/exercises';

const TextSelector = () => {
  const context = useContext(BuildExerciseContext);

  if (!context) return null;

  const { changeText, title, description } = context;

  const _changeText = (key: string, value: string) =>
    changeText(key as ExerciseTextKeys, value);

  return (
    <TextSelectorComponent
      changeText={_changeText}
      values={{ title, description }}
    />
  );
};

export default TextSelector;
