import './Header.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../login/AuthContext'

function Header() {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  const handleLogout = () => {
    
    fetch('/api/logout', {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        toggleLogin(false);
        console.log("Admin logged out")
      } else {
        throw new Error('Error logout admin');
      }
    });
  }
  const adminId = localStorage.getItem('adminId');
  return (
    <div className='header-container'>
      <header>
        <img src="/logo.jpg" alt="LOGO" />
        <nav>
          <ul className='header-ul'>
            {isLoggedIn ? (
              <>
                <Link to={`/${adminId}/home`}>Dashboard</Link>
                <Link onClick={handleLogout} to="/">Logout</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/">Home</Link>
                <Link to="/sign-up">Sign up</Link>
                <Link to="/about">About</Link>
              </>
            )}
            <Link to="mailto:matanew1@gmail.com">Contact</Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}


export default Header;
