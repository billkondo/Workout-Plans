import { IonItem, IonLabel, IonInput } from '@ionic/react';
import React from 'react';
import { colors } from '@material-ui/core';
import { InputChangeEventDetail } from '@ionic/core';

type Props = {
  handleChange: (e: CustomEvent<InputChangeEventDetail>) => void;
  value: string;
  error?: string;
  name: string;
  type:
    | 'number'
    | 'time'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'search'
    | 'date'
    | 'password'
    | undefined;
  label: string;
};

const Input: React.FC<Props> = ({
  handleChange,
  value,
  error,
  type,
  name,
  label
}) => {
  const isInvalid = !!error;

  return (
    <React.Fragment>
      <IonItem>
        <IonLabel
          position="floating"
          style={{
            color: isInvalid ? colors.red[800] : colors.grey[800]
          }}
        >
          {label}
        </IonLabel>
        <IonInput
          type={type}
          value={value}
          name={name}
          onIonChange={handleChange}
        ></IonInput>
      </IonItem>
      {isInvalid && (
        <p style={{ color: colors.red[800], marginLeft: 16 }}>{error}</p>
      )}
    </React.Fragment>
  );
};

export default Input;
