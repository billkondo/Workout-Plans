import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonLabel
} from '@ionic/react';

import CheckComponent from 'components/check/Check';
import { ExerciseOption } from 'types/exercises';

type Props = {
  exerciseOption: ExerciseOption;
  isSelected: boolean;
  selectExerciseOption: (exerciseOption: ExerciseOption) => void;
  unselectExerciseOption: (exerciseOption: ExerciseOption) => void;
};

const ExerciseCard: React.FC<Props> = ({
  exerciseOption,
  isSelected,
  selectExerciseOption,
  unselectExerciseOption
}) => {
  return (
    <IonCard>
      <IonCardHeader className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonGrid>
                <IonRow className="ion-align-items-center">
                  <div style={{ position: 'absolute', zIndex: 999 }}>
                    <CheckComponent
                      handleCheck={() => selectExerciseOption(exerciseOption)}
                      handleUncheck={() =>
                        unselectExerciseOption(exerciseOption)
                      }
                      isSelected={isSelected}
                    />
                  </div>
                  <IonCol>
                    <IonCardTitle style={{ marginLeft: 40 }}>
                      {exerciseOption.exercise.title}
                    </IonCardTitle>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonRow>

          <IonRow style={{ marginTop: 16 }}>
            <IonCol>
              {exerciseOption.exercise.description && (
                <IonCardSubtitle>
                  {exerciseOption.exercise.description}
                </IonCardSubtitle>
              )}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardHeader>

      <IonCardContent className="ion-padding">
        {exerciseOption.exercise.muscles &&
          exerciseOption.exercise.muscles.map(muscle => {
            return (
              <IonChip key={muscle.type}>
                <IonLabel>{muscle.label}</IonLabel>
              </IonChip>
            );
          })}
      </IonCardContent>
    </IonCard>
  );
};

export default ExerciseCard;
