import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonDatetime
} from '@ionic/react';
import { trash } from 'ionicons/icons';
import { addMonths } from 'date-fns';

import { AppDate } from 'types/dates';

type Props = {
  deleteCard: () => void;
  date: AppDate;
  editCard: (date: AppDate) => void;
};

const DayCard: React.FC<Props> = ({ deleteCard, date, editCard }) => {
  const minDate = new Date();
  const maxDate = addMonths(minDate, 24);

  return (
    <IonCard>
      <IonCardHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={deleteCard}>
              <IonIcon icon={trash}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonCardHeader>

      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonDatetime
                placeholder="Selecione data"
                value={date.value}
                displayFormat="DD MMM YYYY"
                min={minDate.toISOString()}
                max={maxDate.toISOString()}
                onIonChange={e => {
                  if (e.target !== null) {
                    const target = e.target as HTMLInputElement;
                    editCard({
                      id: date.id,
                      value: target.value
                    });
                  }
                }}
              ></IonDatetime>
            </IonCol>
          </IonRow>

          {date.value && (
            <IonRow>
              <IonCol>
                <IonDatetime
                  readonly
                  value={date.value}
                  displayFormat="DDDD"
                ></IonDatetime>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default DayCard;
