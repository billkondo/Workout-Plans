import React, { useContext } from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonLabel,
  IonButton
} from '@ionic/react';
import { format } from 'date-fns';

import { BuildTrainingContext } from './BuildTraining';

const FinalPlan = () => {
  const context = useContext(BuildTrainingContext);

  if (!context) return null;

  const { muscles, exerciseOptions, dates } = context;

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <h3 className="ion-text-center">Treino final</h3>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h6>Grupos musculares</h6>
              </IonCol>
            </IonRow>

            {muscles.length === 0 && (
              <IonRow>
                <IonCol>Nenhum músculo selecionado</IonCol>
              </IonRow>
            )}

            {muscles.map(m => {
              return (
                <IonChip key={m.type}>
                  <IonLabel>{m.label}</IonLabel>
                </IonChip>
              );
            })}

            <IonRow></IonRow>
          </IonGrid>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h6>Exercícios</h6>
              </IonCol>
            </IonRow>

            {exerciseOptions.length === 0 && (
              <IonRow>
                <IonCol>Nenhum exercício selecionado</IonCol>
              </IonRow>
            )}

            {exerciseOptions.map(e => {
              return (
                <IonChip key={e.id}>
                  <IonLabel>{e.exercise.title}</IonLabel>
                </IonChip>
              );
            })}

            <IonRow></IonRow>
          </IonGrid>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h6>Dias</h6>
              </IonCol>
            </IonRow>

            {dates.length === 0 && (
              <IonRow>
                <IonCol>Nenhum dia selecionado</IonCol>
              </IonRow>
            )}

            {dates.map(d => {
              if (!d.value) return null;
              const formatedString = format(Date.parse(d.value), 'dd/MM/yyyy');
              return <IonChip key={d.id}>{formatedString}</IonChip>;
            })}

            <IonRow></IonRow>
          </IonGrid>
        </IonCol>
      </IonRow>

      <IonRow style={{ marginTop: 32 }}>
        <IonCol>
          <IonButton expand="full">Criar</IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default FinalPlan;
