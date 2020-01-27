import { ExercisesFiltersIDs } from 'types/exercises';

const routes = {
  login: '/login',
  home: {
    root: '/home',
    training: '/home/training',
    exercises: '/home/exercises'
  },
  trainings: {
    build: {
      root: '/training/build'
    },
    list: '/trainings/list',
    view: (id?: string) =>
      id ? `/trainings/view/${id}` : '/trainings/view/:id',
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
    },
    edit: {
      exercise: (id?: string) =>
        id ? `/exercises/edit/${id}` : '/exercises/edit/:id'
    }
  }
};

export default routes;
