const routes = {
  login: '/login',
  home: {
    root: '/home',
    training: '/home/training',
    exercises: '/home/exercises'
  },
  training: {
    build: {
      root: '/training/build',
      muscles: '/training/build/muscles'
    }
  }
};

export default routes;
