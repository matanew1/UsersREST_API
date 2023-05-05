import './AddUser.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/users/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    }).then(response => {
        if (response.ok) {
          console.log('User added successfully');
          navigate('/profile/users/new/success');
        } else {
          throw new Error('Error adding user');
        }
      })
  };

  return (
    <div className="container">
      <h1>New User</h1>
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
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default AddUser;
