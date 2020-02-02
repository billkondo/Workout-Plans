import React, { useState } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonModal
} from '@ionic/react';

import DaySelectorContent from 'components/day_selector/DaySelector';

import { AppDate } from 'types/dates';

type Props = {
  dates: AppDate[];
  addDate: (date: AppDate) => void;
  editDate: (date: AppDate) => void;
  removeDate: (date: AppDate) => void;
  dayToOpen: string;
};

const DaySelector: React.FC<Props> = ({
  dates,
  addDate,
  editDate,
  removeDate,
  dayToOpen
}) => {
  const [isOpen, setOpen] = useState(false);

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
