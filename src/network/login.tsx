type LoginForm = {
  email: string;
  password: string;
};

const doLogin = async (form: LoginForm) => {
  console.log('DO LOGIN', form);

  if (form.email !== 'will' || form.password != '123') throw new Error('MOCK');
};

export { doLogin };
