import React from 'react';
import { IonGrid, IonRow, IonCol, IonTextarea, IonText } from '@ionic/react';
import { colors } from '@material-ui/core';

import { ExerciseError } from 'types/exercises';
import { Muscle } from 'types/muscles';

import MuscleChip from 'components/MuscleChip';

type Props = {
  title: string;
  description: string;
  muscles: Muscle[];
  errors: ExerciseError;
};

const FinalPlan: React.FC<Props> = ({
  title,
  description,
  muscles,
  errors
}) => {
  const isMusclesOK = !errors.muscles;
  const isTitleOK = !errors.title;
  const isDescriptionOK = !errors.description;

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <h3 className="ion-text-center header-font">Exercício final</h3>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h6 className="sub-header-font">Grupos musculares</h6>
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
              return <MuscleChip key={m.type} muscle={m}></MuscleChip>;
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
                <h6 className="sub-header-font">Nome do exercício</h6>
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
              <IonCol className="sub-header-font">
                <h6>Descrição do exercício</h6>
              </IonCol>
            </IonRow>

            {!isDescriptionOK && (
              <IonRow style={{ color: colors.red.A700 }}>
                <IonCol>{errors.description}</IonCol>
              </IonRow>
            )}

            {isDescriptionOK && !description && (
              <IonRow>
                <IonCol>Nenhuma descrição escolhida</IonCol>
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
