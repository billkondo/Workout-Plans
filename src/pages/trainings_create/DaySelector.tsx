import React, { useState, useContext } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonModal
} from '@ionic/react';

import { BuildTrainingContext } from './TrainingsCreate';
import DaySelectorContent from 'components/day_selector/DaySelector';

const DaySelector = () => {
  const [isOpen, setOpen] = useState(false);

  const context = useContext(BuildTrainingContext);

  if (!context) return null;

  const { addDate, dates, editDate, removeDate, dayToOpen } = context;

  return (
    <React.Fragment>
      <IonModal isOpen={isOpen} onDidDismiss={() => setOpen(false)}>
        <DaySelectorContent
          closeContent={() => setOpen(false)}
          createDate={addDate}
          dates={dates}
          editDate={editDate}
          deleteDate={removeDate}
          dayToOpen={dayToOpen}
        />
      </IonModal>

      <IonCard onClick={() => setOpen(true)}>
        <IonCardHeader>
          <IonCardTitle className="ion-padding">Escolher dia</IonCardTitle>
          <IonCardSubtitle className="ion-padding">
            Quando esse treino será executado
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </React.Fragment>
  );
};

export default DaySelector;
