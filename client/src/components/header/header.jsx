import './Header.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../login/AuthContext'
import { useLocation } from 'react-router-dom';


function Header() {
  const location = useLocation();
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);
  const [sessionsID, setSessionsID] = useState([]);
  const adminId = localStorage.getItem('adminId');

  useEffect(() => {
    // Check if the user was previously logged in
    if (location.pathname === '/') {
      toggleLogin(false);
    }

    const fetchData = async () => {
      try {
        const response = await fetch('/api/online');
        if (!response.ok) {
          throw new Error('Error getting sessions');
        }
        const data = await response.json();
        setSessionsID(data);
        console.log('Successful load sessions');
      } catch (error) {
        console.error(error);
        // Handle the error here if needed
      }
    };
  
    fetchData(); // Fetch data immediately
  
    const interval = setInterval(fetchData, 5000); // Set interval to fetch data every 5 seconds
  
    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, [isLoggedIn, location, toggleLogin]); // Empty dependency array to run only once on mount
  
  const handleLogout = () => {
    
    fetch('/api/logout', {
      method: 'GET',
    }).then(response => {
      response.json().then(data => console.log(data))
      if (response.ok) {
        toggleLogin(false);
        console.log("Admin logged out")
      } else {
        throw new Error('Error logout admin');
      }
    });
  }
  
  return (
    <div className='header-container'>
      <header>
        <img src="/logo.jpg" alt="LOGO" />
        <nav>
          <ul className='header-ul'>
            <h3>Current online sessions: {sessionsID.length}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
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
