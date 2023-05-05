import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [wrongDetails, setWrongDetails] = useState(false);
  const navigate = useNavigate();
  const { toggleLogin } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('api/admin/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
    .then(response => {
      if (response.ok) {
        response.json().then(data => {
          console.log('Admin created successfully');
          navigate(`/${data._id}/home`);
          toggleLogin(true);
        });
      } else {
        setWrongDetails(true);
        throw new Error('Error signing up admin');
      }
    })
    .catch(error => console.error(error));
  };
  

return (
  <div className="container">
    <h1>Sign up</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" className="form-input" required
          value={name} onChange={(event) => setName(event.target.value)} />
      </div>
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

export default SignUpPage;
