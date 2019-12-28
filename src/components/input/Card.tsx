import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonCardSubtitle,
  IonTextarea
} from '@ionic/react';
import { InputChangeEventDetail } from '@ionic/core';

type Props = {
  title: string;
  placeholder: string;
  titleType?: 'title' | 'subtitle';
  textType?: 'input' | 'textarea';
  name: string;
  value: string;
  handleChange: (key: string, value: string) => void;
};

const InputCard: React.FC<Props> = ({
  title,
  placeholder,
  titleType,
  textType,
  name,
  value,
  handleChange
}) => {
  const onChange = (e: CustomEvent<InputChangeEventDetail>) => {
    if (e.target !== null) {
      const target = e.target as HTMLInputElement;
      handleChange(target.name, target.value);
    }
  };

  return (
    <IonCard>
      <IonCardHeader>
        {!titleType ? (
          <IonCardTitle className="ion-padding">{title}</IonCardTitle>
        ) : (
          <IonCardSubtitle className="ion-padding">{title}</IonCardSubtitle>
        )}
      </IonCardHeader>

      <IonCardContent className="ion-padding">
        {!textType ? (
          <IonInput
            placeholder={placeholder}
            name={name}
            value={value}
            onIonChange={onChange}
          />
        ) : (
          <IonTextarea
            placeholder={placeholder}
            name={name}
            value={value}
            onIonChange={onChange}
          />
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default InputCard;
