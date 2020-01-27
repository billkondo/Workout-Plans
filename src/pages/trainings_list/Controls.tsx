import React from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonBadge
} from '@ionic/react';
import { list } from 'ionicons/icons';
import { colors } from '@material-ui/core';

import routes from 'config/routes';

type Props = {
  activeFilters: number;
};

const Controls: React.FC<Props> = ({ activeFilters }) => {
  const hasFilters = activeFilters > 0;

  return (
    <IonGrid style={{ padding: 0 }}>
      <IonRow style={{ marginTop: 8 }}>
        <IonCol
          style={{ padding: 0, display: 'flex', justifyContent: 'flex-end' }}
        >
          <IonButton
            routerDirection="none"
            routerLink={routes.trainings.filters}
            color={hasFilters ? 'danger' : 'light'}
          >
            Filtros
            {!hasFilters && (
              <div style={{ marginLeft: 16 }}>
                <IonIcon icon={list}></IonIcon>
              </div>
            )}
            {hasFilters && (
              <IonBadge
                style={{ marginLeft: 16, color: colors.red[500] }}
                color="light"
              >
                {activeFilters}
              </IonBadge>
            )}
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Controls;
