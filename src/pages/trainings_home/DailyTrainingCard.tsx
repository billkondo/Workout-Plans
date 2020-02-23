import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonChip,
  IonLabel,
  IonText
} from '@ionic/react';

import { DailyTraining, Training } from 'types/training';
import { Muscle } from 'types/muscles';

type Props = {
  dailyTraining: DailyTraining;
  selectDailyTraining: (date: DailyTraining) => void;
};

const extractMusclesFromTrainings = (trainings: Training[]): Muscle[] => {
  const muscleArray: Muscle[] = [];

  for (const training of trainings) {
    for (const muscle of training.muscles)
      if (!muscleArray.find(m => m.type === muscle.type))
        muscleArray.push(muscle);
  }

  return muscleArray;
};

const DailyTrainingCard: React.FC<Props> = ({
  dailyTraining,
  selectDailyTraining
}) => {
  const { trainings } = dailyTraining;

  const muscles = extractMusclesFromTrainings(trainings);

  const isRestDay = trainings.length === 0;

  return (
    <IonCard
      style={{ height: 200, width: 250 }}
      onClick={() => selectDailyTraining(dailyTraining)}
    >
      <IonCardHeader>
        <IonCardSubtitle className="header-font">
          {dailyTraining.date}
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        {muscles.map(m => {
          return (
            <IonChip key={m.type}>
              <IonLabel>{`${m.label}`}</IonLabel>
            </IonChip>
          );
        })}

        {isRestDay && (
          <div
            className="ion-text-center sub-header-font"
            style={{ marginTop: 16 }}
          >
            <IonText>Descanso</IonText>
          </div>
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default DailyTrainingCard;
