import React, { useRef, useEffect } from 'react';
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
import { addMonths, subMonths } from 'date-fns';

import { AppDate } from 'types/dates';

type Props = {
  deleteCard: () => void;
  date: AppDate;
  editCard: (date: AppDate) => void;
  open?: boolean;
};

const DayCard: React.FC<Props> = ({
  deleteCard,
  date,
  editCard,
  open = false
}) => {
  const minDate = subMonths(new Date(), 12);
  const maxDate = addMonths(minDate, 24);
  const dateRef = useRef<HTMLIonDatetimeElement>(null);

  useEffect(() => {
    if (dateRef && dateRef.current && open) dateRef.current.open();
  }, [open]);

  return (
    <IonCard>
      <IonCardHeader style={{ padding: 0 }}>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={deleteCard}>
              <IonIcon icon={trash}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonCardHeader>

      <IonCardContent style={{ padding: 0 }}>
        <IonGrid style={{ padding: 0 }}>
          <IonRow>
            <IonCol style={{ padding: 0 }}>
              <IonDatetime
                ref={dateRef}
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
              <IonCol style={{ padding: 0 }}>
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
