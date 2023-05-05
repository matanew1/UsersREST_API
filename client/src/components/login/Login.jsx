import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongDetails, setWrongDetails] = useState(false);
  const navigate = useNavigate();
  const { toggleLogin } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          const adminId = data._id;
          localStorage.setItem('adminId',adminId);
          console.log('User logged in successfully');
          if (adminId) {
            navigate(`/${adminId}/home`);
          } else {
            console.error('Admin ID is undefined');
          }
          toggleLogin(true);
        });
      } else {
        setWrongDetails(true);
        throw new Error('Error log in user');
      }
    });
  };
  
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="form-input" required
            value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input maxLength="16" type="password" id="password" name="password" className="form-input" required
            value={password} onChange={(event) => setPassword(event.target.value)} />
          {wrongDetails ? (<p>Wrong details, try again...</p>) : (<p></p>)}
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Login;
