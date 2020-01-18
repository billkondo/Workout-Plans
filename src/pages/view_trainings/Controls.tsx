import React from 'react';
import { IonButton, IonIcon, IonBadge } from '@ionic/react';
import { list } from 'ionicons/icons';

import routes from 'config/routes';

type Props = {
  activeFilters: number;
};

const Controls: React.FC<Props> = ({ activeFilters }) => {
  const hasFilters = activeFilters > 0;

  return (
    <div>
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
    </div>
  );
};

export default Controls;
