import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(response => {
        if (response.ok) {
          console.log('User logged in successfully');
          navigate('/profile/home');
        } else {
          throw new Error('Error log in user');
        }
      })
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
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Login;
