import React, { FunctionComponent } from 'react';
import { IonGrid, IonCol, IonRow } from '@ionic/react';

const Center: FunctionComponent = props => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol sizeMd="4" offsetMd="4">
          {props.children}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Center;
