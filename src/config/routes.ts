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
    }
  },
  exercises: {
    build: {
      root: '/exercises/build'
    }
  }
};

export default routes;
