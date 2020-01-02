import React from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonFab,
  IonFabButton
} from '@ionic/react';
import { close, add } from 'ionicons/icons';
import uuidv4 from 'uuid/v4';

import DayCard from './DayCard';
import { AppDate } from 'types/dates';

type Props = {
  closeContent: () => void;
  createDate: (date: AppDate) => void;
  deleteDate: (date: AppDate) => void;
  editDate: (date: AppDate) => void;
  dates: Array<AppDate>;
  dayToOpen: string;
};

const DaySelectorContent: React.FC<Props> = ({
  closeContent,
  createDate,
  deleteDate,
  editDate,
  dates,
  dayToOpen
}) => {
  const isDatesEmpty = dates.length === 0;

  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={closeContent}>
              <IonIcon icon={close}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonGrid class="ion-padding">
        {isDatesEmpty && (
          <IonRow>
            <IonCol>
              <h3 className="ion-text-center">Nenhum dia adicionado</h3>
            </IonCol>
          </IonRow>
        )}

        {dates.map(d => {
          return (
            <IonRow key={d.id}>
              <IonCol>
                <DayCard
                  deleteCard={() => deleteDate(d)}
                  date={d}
                  editCard={editDate}
                  open={d.id === dayToOpen}
                />
              </IonCol>
            </IonRow>
          );
        })}
      </IonGrid>

      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton
          onClick={() =>
            createDate({
              id: uuidv4(),
              value: ''
            })
          }
        >
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>
    </IonContent>
  );
};

export default DaySelectorContent;
