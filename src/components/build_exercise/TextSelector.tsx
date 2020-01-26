import React from 'react';

import { ExerciseTextKeys } from 'types/exercises';

import TextSelectorComponent from 'components/text_selector/TextSelector';

type Props = {
  title: string;
  description: string;
  changeText: (key: ExerciseTextKeys, value: string) => void;
};

const TextSelector: React.FC<Props> = ({ title, description, changeText }) => {
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
