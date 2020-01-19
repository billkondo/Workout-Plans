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
            routerLink={routes.training.filters.root}
            color={!hasFilters ? 'light' : 'primary'}
          >
            Filtros
            {!hasFilters && (
              <div style={{ marginLeft: 8 }}>
                <IonIcon icon={list}></IonIcon>
              </div>
            )}
            {hasFilters && (
              <IonBadge style={{ marginLeft: 8 }} color="light">
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
