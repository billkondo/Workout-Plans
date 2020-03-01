import React from 'react';
import { RouteProps } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

import routes from 'config/routes';
import { useAuth } from 'hooks/auth';

interface Props extends RouteProps {}

const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  const { isAuth } = useAuth();

  return (
    <Route
      {...rest}
      render={() => {
        return isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: routes.login,
              state: {
                path: rest.path
              }
            }}
          ></Redirect>
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
