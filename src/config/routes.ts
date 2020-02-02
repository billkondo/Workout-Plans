import { ExercisesFiltersIDs } from 'types/exercises';

const routes = {
  login: '/login',
  home: {
    root: '/home',
    training: '/home/training',
    exercises: '/home/exercises'
  },
  trainings: {
    create: '/trainings/create',
    list: '/trainings/list',
    view: (id?: string) =>
      id ? `/trainings/view/${id}` : '/trainings/view/:id',
    filters: '/trainings/filters',
    edit: (id?: string) =>
      id ? `/trainings/edit/${id}` : '/trainings/edit/:id'
  },
  exercises: {
    create: '/exercises/create',
    view: (id?: string) =>
      id ? `/exercises/view/${id}` : '/exercises/view/:id',
    filters: (id?: ExercisesFiltersIDs) =>
      id ? `/exercises/filters/${id}` : '/exercises/filters/:id',
    edit: (id?: string) =>
      id ? `/exercises/edit/${id}` : '/exercises/edit/:id'
  }
};

export default routes;
