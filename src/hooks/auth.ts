import { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState, actions } from 'state';

import { LoginFormParams } from 'models/login_form';

import { localStorage } from 'storage';
import { useFirebaseMethods } from 'hooks/firebase';
import { LogoutInterface } from 'types/auth';

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

export const useAuthPersistence = () => {
  const authState = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    localStorage().add('auth', authState);
  }, [authState]);
};

export const useLogin = () => {
  const { loginWithFirebase } = useFirebaseMethods();

  const login = async (form: LoginFormParams) => {
    await loginWithFirebase(form.email, form.password);
  };

  return {
    login
  };
};

export const useLogout = (): LogoutInterface => {
  const { logoutWithFirebase } = useFirebaseMethods();
  const [isLoggingOut, setLoggingOut] = useState(false);
  const [hasLoggingOutFailed, setLoggingOutFailed] = useState(false);

  const logout = async () => {
    try {
      setLoggingOut(true);

      await logoutWithFirebase();

      setLoggingOut(false);
    } catch (err) {
      setLoggingOut(false);
      setLoggingOutFailed(true);
    }
  };

  const dismissLoggingOutFailure = () => setLoggingOutFailed(false);

  return {
    isLoggingOut,
    logout,
    hasLoggingOutFailed,
    dismissLoggingOutFailure
  };
};
