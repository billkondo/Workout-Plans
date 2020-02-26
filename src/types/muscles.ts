import { colors } from '@material-ui/core';

export type Muscle = {
  type: string;
  label: string;
  color: string;
};

export type MuscleOption = {
  muscle: Muscle;
  subMuscles: Array<Muscle>;
};

const registeredMuscles = {
  // Main muscles
  CHEST: 'CHEST',
  BACK: 'BACK',
  SHOULDERS: 'SHOULDERS',
  LEGS: 'LEGS',
  ARMS: 'ARMS',
  ABS: 'ABS',

  // Muscles divisions
  UPPER_CHEST: 'UPPER_CHEST',
  MIDDLE_CHEST: 'MIDDLE_CHEST',
  LOWER_CHEST: 'LOWER_CHEST',

  LATS: 'LATS',
  LOWER_BACK: 'LOWER_BACK',

  BICEPS: 'BICEPS',
  TRICEPS: 'TRICEPS',
  FOREARM: 'FOREARM',

  SHOULDERS_ANTERIOR: 'SHOULDERS_ANTERIOR',
  SHOULDERS_LATERAL: 'SHOULDERS_LATERAL',
  SHOULDERS_POSTERIOR: 'SHOULDERS_POSTERIOR',

  QUADS: 'QUADS',
  HAMSTRINGS: 'HAMSTRINGS',
  CALVES: 'CALVES'
};

type MusclesType = {
  [key: string]: Muscle;
};

export const muscles: MusclesType = {
  // Chest
  chest: {
    type: registeredMuscles.CHEST,
    label: 'Peitoral',
    color: colors.red[100]
  },
  upperChest: {
    type: registeredMuscles.UPPER_CHEST,
    label: 'Peitoral Superior',
    color: colors.red[200]
  },
  middleChest: {
    type: registeredMuscles.MIDDLE_CHEST,
    label: 'Peitoral Medial',
    color: colors.red[300]
  },
  lowerChest: {
    type: registeredMuscles.LOWER_CHEST,
    label: 'Peitoral Inferior',
    color: colors.red[400]
  },

  // Back
  back: {
    type: registeredMuscles.BACK,
    label: 'Costas',
    color: colors.blue[100]
  },
  lats: {
    type: registeredMuscles.LATS,
    label: 'Dorsais',
    color: colors.blue[200]
  },
  lowerBack: {
    type: registeredMuscles.LOWER_BACK,
    label: 'Lombar',
    color: colors.blue[300]
  },

  // Shoulders
  shoulders: {
    type: registeredMuscles.SHOULDERS,
    label: 'Ombros',
    color: colors.orange[100]
  },
  shouldersAnterior: {
    type: registeredMuscles.SHOULDERS_ANTERIOR,
    label: 'Deltoide frontal',
    color: colors.orange[200]
  },
  shouldersLateral: {
    type: registeredMuscles.SHOULDERS_LATERAL,
    label: 'Deltoide lateral',
    color: colors.orange[300]
  },
  shouldersPosterior: {
    type: registeredMuscles.SHOULDERS_POSTERIOR,
    label: 'Deltoide posterior',
    color: colors.orange[400]
  },

  // Legs
  legs: {
    type: registeredMuscles.LEGS,
    label: 'Pernas',
    color: colors.purple[100]
  },
  quads: {
    type: registeredMuscles.QUADS,
    label: 'Quadrícips',
    color: colors.purple[200]
  },
  hamstrings: {
    type: registeredMuscles.HAMSTRINGS,
    label: 'Posterior de coxa',
    color: colors.purple[300]
  },
  calves: {
    type: registeredMuscles.CALVES,
    label: 'Panturrilha',
    color: colors.purple[400]
  },

  // ARMS
  arms: {
    type: registeredMuscles.ARMS,
    label: 'Braços',
    color: colors.green[100]
  },
  biceps: {
    type: registeredMuscles.BICEPS,
    label: 'Bíceps',
    color: colors.green[200]
  },
  triceps: {
    type: registeredMuscles.TRICEPS,
    label: 'Tríceps',
    color: colors.green[300]
  },
  forearm: {
    type: registeredMuscles.FOREARM,
    label: 'Antebraço',
    color: colors.green[400]
  },

  // ABS
  abs: {
    type: registeredMuscles.ABS,
    label: 'Abdômen',
    color: colors.indigo[100]
  }
};

type OptionType = {
  [key: string]: MuscleOption;
};

const options: OptionType = {
  chest: {
    muscle: muscles.chest,
    subMuscles: [muscles.upperChest, muscles.middleChest, muscles.lowerChest]
  },
  back: {
    muscle: muscles.back,
    subMuscles: [muscles.lats, muscles.lowerBack]
  },
  shoulders: {
    muscle: muscles.shoulders,
    subMuscles: [
      muscles.shouldersAnterior,
      muscles.shouldersLateral,
      muscles.shouldersPosterior
    ]
  },
  arms: {
    muscle: muscles.arms,
    subMuscles: [muscles.biceps, muscles.triceps, muscles.forearm]
  },
  legs: {
    muscle: muscles.legs,
    subMuscles: [muscles.quads, muscles.hamstrings, muscles.calves]
  },
  abs: {
    muscle: muscles.abs,
    subMuscles: []
  }
};

export const muscleOptions = Object.keys(options).map(
  muscle => options[muscle]
);
