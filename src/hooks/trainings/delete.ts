import { useState } from 'react';

import { useStore } from 'hooks/store';

import { Training } from 'types/training';

export const useTrainingsDelete = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const store = useStore();

  const deleteTraining = async (training: Training): Promise<boolean> => {
    try {
      setIsDeleting(true);

      await store.deleteTraining(training);

      setIsDeleting(false);
      return true;
    } catch (err) {
      setIsDeleting(false);
      return false;
    }
  };

  return {
    deleteTraining,
    isDeleting
  };
};
