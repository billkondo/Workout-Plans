import React, { useState } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonModal,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { close } from 'ionicons/icons';

import InputCard from 'components/input/Card';

type Values = {
  title: string;
  description: string;
};

type Props = {
  title?: string;
  description?: string;
  values: Values;
  changeText: (key: string, value: string) => void;
};

const TextSelector: React.FC<Props> = ({
  title,
  description,
  changeText,
  values
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      <IonModal isOpen={isOpen} onDidDismiss={() => setOpen(false)}>
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton onClick={() => setOpen(false)}>
                  <IonIcon icon={close}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <IonGrid class="ion-padding">
            <IonRow>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <InputCard
                      title="Nome do exercício"
                      placeholder="Escolha nome do exercício"
                      name="title"
                      value={values.title}
                      handleChange={changeText}
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol>
                    <InputCard
                      title="Descrição (opcional)"
                      placeholder="Digite uma breve descrição"
                      textType="textarea"
                      titleType="subtitle"
                      name="description"
                      value={values.description}
                      handleChange={changeText}
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>

      <IonCard onClick={() => setOpen(true)}>
        <IonCardHeader>
          <IonCardTitle className="ion-padding">
            {!!title ? title : 'Escolher nome e descrição'}
          </IonCardTitle>

          <IonCardSubtitle className="ion-padding">
            {!!description
              ? description
              : 'Qual o nome do exercício e como exercutá-lo '}
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </React.Fragment>
  );
};

export default TextSelector;
