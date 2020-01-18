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
    }
  }
};

export default routes;
