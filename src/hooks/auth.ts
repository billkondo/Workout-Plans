import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState, actions } from 'state';

import { useFirebaseMethods } from 'hooks/firebase';

export const useAuth = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.auth);

  const isAuth = !!state.userID;

  const setUserData = useCallback(
    (userID: string, email: string | null) =>
      dispatch(actions.auth.setUserData(userID, email || '')),
    [dispatch]
  );

  const resetUserData = useCallback(
    () => dispatch(actions.auth.resetUserData()),
    [dispatch]
  );

  return {
    isAuth,
    setUserData,
    userID: state.userID,
    email: state.email,
    resetUserData
  };
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
