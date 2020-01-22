import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, IonChip, IonLabel } from '@ionic/react';
import { IconButton } from '@material-ui/core';
import { Settings } from '@material-ui/icons';

import MuscleSelectorComponent from 'components/muscle_selector/MuscleSelector';

import { muscleOptions, Muscle } from 'types/muscles';

type Props = {
  muscles: Muscle[];
  addMuscle: (muscle: Muscle) => void;
  removeMuscle: (muscle: Muscle) => void;
};

const MuscleList: React.FC<Props> = ({ muscles, addMuscle, removeMuscle }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <IonGrid>
      <MuscleSelectorComponent
        isOpen={isOpen}
        closeSelector={() => setOpen(false)}
        muscleOptions={muscleOptions}
        selectMuscle={addMuscle}
        selectedMuscles={muscles}
        unselectMuscle={removeMuscle}
      />

      <IonRow>
        <IonCol>
          <div className="title-font" style={{ display: 'inline-block' }}>
            Filtrar por músculo
          </div>

          <IconButton
            style={{ display: 'inline-block', marginLeft: 8 }}
            onClick={() => setOpen(true)}
          >
            <Settings />
          </IconButton>
        </IonCol>
      </IonRow>

      {muscles.length === 0 && (
        <IonRow>
          <IonCol>
            <div>Nenhum músculo selecionado</div>
          </IonCol>
        </IonRow>
      )}

      {muscles.length > 0 && (
        <IonRow>
          <IonCol style={{ padding: 0 }}>
            {muscles.map(m => {
              return (
                <IonChip key={m.type}>
                  <IonLabel>{m.label}</IonLabel>
                </IonChip>
              );
            })}
          </IonCol>
        </IonRow>
      )}
    </IonGrid>
  );
};

export default MuscleList;
