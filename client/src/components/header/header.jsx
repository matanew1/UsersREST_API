import './Header.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../login/AuthContext'

function Header() {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  const handleLogout = () => {
    toggleLogin(false);
  }

  return (
    <div className='header-container'>
      <header>
        <img src="/logo.jpg" alt="LOGO" />
        <nav>
          <ul className='header-ul'>
            {isLoggedIn ? (
              <>
                <Link onClick={handleLogout} to="/">Logout</Link>
              </>
            ) : (
              <>
                <Link to="/">Home</Link>
                <Link to="/sign-up">Sign up</Link>
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}


export default Header;
