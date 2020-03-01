import React from 'react';

import { AppContext } from 'app_context';

import { useLogout } from 'hooks/auth';

const AppContextProvider: React.FC = ({ children }) => {
  const logoutInterface = useLogout();

  return (
    <AppContext.Provider value={{ logoutInterface }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
