import React from 'react';

import { LogoutInterface } from 'types/auth';

export type AppContextType = {
  logoutInterface: LogoutInterface;
};

export const AppContext = React.createContext<AppContextType>({
  logoutInterface: {
    isLoggingOut: false,
    hasLoggingOutFailed: false,
    logout: () => {
      throw new Error('logout() was not implemented');
    },
    dismissLoggingOutFailure: () => {
      throw new Error('dismissLoggingOutFailure() was not implemented');
    }
  }
});
