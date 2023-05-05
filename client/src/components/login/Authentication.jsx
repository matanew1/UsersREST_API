import { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom';

function Authentication({ children }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return undefined;
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? children : null;
}

export default Authentication;
