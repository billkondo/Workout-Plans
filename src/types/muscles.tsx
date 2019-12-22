export type Muscle = {
  type: string;
  label: string;
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

  SHOULDERS_ANTERIOR: 'SHOULDERS_ANTERIOR',
  SHOULDERS_LATERAL: 'SHOULDERS_LATERAL',
  SHOULDERS_POSTERIOR: 'SHOULDERS_POSTERIOR',

  QUADS: 'QUADS',
  HAMSTRINGS: 'HAMSTRINGS'
};

type MusclesType = {
  [key: string]: Muscle;
};

const muscles: MusclesType = {
  chest: {
    type: registeredMuscles.CHEST,
    label: 'Peitoral'
  },
  upperChest: {
    type: registeredMuscles.UPPER_CHEST,
    label: 'Superior'
  },
  middleChest: {
    type: registeredMuscles.MIDDLE_CHEST,
    label: 'Medial'
  },
  lowerChest: { type: registeredMuscles.LOWER_CHEST, label: 'Inferior' },

  back: { type: registeredMuscles.BACK, label: 'Costas' },
  lats: { type: registeredMuscles.LATS, label: 'Dorsais' },
  lowerBack: { type: registeredMuscles.LOWER_BACK, label: 'Lombar' }
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
  }
};

export const muscleOptions = Object.keys(options).map(
  muscle => options[muscle]
);
