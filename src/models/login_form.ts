export type LoginFormParams = {
  email: string;
  password: string;
};

export type LoginFormErrors = {
  email?: string;
  password?: string;
};

export type LoginFormFields = 'email' | 'password';

export const LoginForm = (params: LoginFormParams) => {
  const { email, password } = params;

  const _email = email;
  const _password = password;

  const getErrors = (): LoginFormErrors => {
    const errors: LoginFormErrors = {};

    if (_email.length === 0) errors.email = 'Email vazio';
    if (_email.length > 255) errors.email = 'Email muito longo';

    if (_password.length === 0) errors.password = 'Senha vazia';
    if (_password.length > 255) errors.password = 'Senha muito longa';

    return errors;
  };

  const isValid = (): boolean => {
    if (_email.length === 0) return false;
    if (_email.length > 255) return false;

    if (_password.length === 0) return false;
    if (_password.length > 255) return false;

    return true;
  };

  const getValues = (): LoginFormParams => {
    return {
      email: _email,
      password: _password
    };
  };

  return {
    isValid,
    getErrors,
    getValues
  };
};
