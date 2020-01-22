import { ExercisesFiltersIDs } from 'types/exercises';

const routes = {
  login: '/login',
  home: {
    root: '/home',
    training: '/home/training',
    exercises: '/home/exercises'
  },
  training: {
    build: {
      root: '/training/build'
    },
    view: {
      root: '/training/view'
    },
    filters: {
      root: '/training/filters'
    }
  },
  exercises: {
    build: {
      root: '/exercises/build'
    },
    view: {
      exercise: (id?: string) =>
        id ? `/exercises/view/${id}` : '/exercises/view/:id'
    },
    filters: {
      root: (id?: ExercisesFiltersIDs) =>
        id ? `/exercises/filters/${id}` : '/exercises/filters/:id'
    }
  }
};

export default routes;
