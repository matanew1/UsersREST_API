import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './login/AuthContext';

function PrivateRoute({ path, ...props }) {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate to='/login' />
  );
}

export default PrivateRoute;
