import React, { useContext } from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonLabel,
  IonText,
  IonTextarea
} from '@ionic/react';
import { colors } from '@material-ui/core';

import { BuildExerciseContext } from './BuildExercise';

const FinalPlan = () => {
  const context = useContext(BuildExerciseContext);

  if (!context) return null;

  const { muscles, errors, title, description } = context;

  const isMusclesOK = !errors.muscles;
  const isTitleOK = !errors.title;
  const isDescriptionOK = !errors.description;

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <h3 className="ion-text-center">Exercício final</h3>
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

            {!isMusclesOK && (
              <IonRow style={{ color: colors.red.A700 }}>
                <IonCol>{errors.muscles}</IonCol>
              </IonRow>
            )}

            {isMusclesOK && muscles.length === 0 && (
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
                <h6>Nome do exercício</h6>
              </IonCol>
            </IonRow>

            {!isTitleOK && (
              <IonRow style={{ color: colors.red.A700 }}>
                <IonCol>{errors.title}</IonCol>
              </IonRow>
            )}

            {isTitleOK && !title && (
              <IonRow>
                <IonCol>Nenhum nome foi escolhido</IonCol>
              </IonRow>
            )}

            {!!title && (
              <IonRow>
                <IonCol>
                  <IonText>{title}</IonText>
                </IonCol>
              </IonRow>
            )}

            <IonRow></IonRow>
          </IonGrid>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h6>Nome do exercício</h6>
              </IonCol>
            </IonRow>

            {!isDescriptionOK && (
              <IonRow style={{ color: colors.red.A700 }}>
                <IonCol>{errors.description}</IonCol>
              </IonRow>
            )}

            {isDescriptionOK && !description && (
              <IonRow>
                <IonCol>Nenhum nome foi escolhido</IonCol>
              </IonRow>
            )}

            {!!description && (
              <IonTextarea value={description} readonly autoGrow={true} />
            )}

            <IonRow></IonRow>
          </IonGrid>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default FinalPlan;
