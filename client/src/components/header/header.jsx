import './header.css';
import { useContext } from 'react';
import { AuthContext } from '../login/AuthContext'

function Header() {

  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  const handleLogout = () => {
    toggleLogin(false);
  }

  return (
    <div className='header-container'>
      <header>
        <a href="/profile/home">
          <img src="/logo.jpg" alt="LOGO" />
        </a>
        <nav>
          <ul className='header-ul'>
            {isLoggedIn ? (
              <>
                <li><a onClick={handleLogout} href="/">Logout</a></li>
                <li><a href="/profile/home">Dashboard</a></li>
              </>
            ) : (
              <>
                <li><a href="/login">Login</a></li>
                <li><a href="/">Home</a></li>
              </>
            )}
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
