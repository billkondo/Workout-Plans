import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState, actions } from 'state';

import { useFirebaseMethods } from 'hooks/firebase';

export const useAuth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const setAuth = useCallback(
    (auth: boolean) => dispatch(actions.auth.setAuth(auth)),
    [dispatch]
  );

  return { isAuth, setAuth };
};

type LoginForm = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const { loginWithFirebase } = useFirebaseMethods();

  const login = async (form: LoginForm) => {
    await loginWithFirebase(form.email, form.password);
  };

  return login;
};

export const useLogout = () => {
  const { logoutWithFirebase } = useFirebaseMethods();

  const logout = async () => {
    await logoutWithFirebase();
  };

  return logout;
};
