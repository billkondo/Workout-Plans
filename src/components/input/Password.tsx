import { IonItem, IonLabel, IonInput } from '@ionic/react';
import React, { useState } from 'react';
import { colors, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { InputChangeEventDetail } from '@ionic/core';

type Props = {
  handleChange: (e: CustomEvent<InputChangeEventDetail>) => void;
  value: string;
  error?: string;
  name: string;
  label: string;
};

const Password: React.FC<Props> = ({
  handleChange,
  value,
  error,
  name,
  label
}) => {
  const [isVisible, setVisibility] = useState(false);
  const isInvalid = !!error;

  const onChangeVisibility = () => setVisibility(!isVisible);

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
          type={isVisible ? 'text' : 'password'}
          value={value}
          name={name}
          onIonChange={handleChange}
        ></IonInput>

        <IconButton
          style={{ position: 'absolute', zIndex: 999, right: 0, marginTop: 4 }}
          onClick={onChangeVisibility}
        >
          {isVisible ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </IonItem>
      {isInvalid && (
        <p style={{ color: colors.red[800], marginLeft: 16 }}>{error}</p>
      )}
    </React.Fragment>
  );
};

export default Password;
