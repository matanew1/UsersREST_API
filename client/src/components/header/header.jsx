import './Header.css';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../login/AuthContext'

function Header() {
  const { adminId } = useParams();
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
            {console.log(isLoggedIn)}
            {isLoggedIn ? (
              <>
                <li><a onClick={handleLogout} href="/">Logout</a></li>
              </>
            ) : (
              <>
                <li><a href="/sign-up">Sign up</a></li>
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
