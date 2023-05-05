import './UpdateUser.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

function UpdateUser() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const {adminId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/${adminId}/users`)
      .then(response => response.json())
      .then(async data => {
        console.log('data',data)
        const userObjects = await Promise.all(data.map(async userId => {
          const response = await fetch(`/api/${adminId}/users/${userId}`);
          return response.json();
        }));
        setUsers(userObjects);
      });
  }, [adminId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch(`/${adminId}/users/update/${currentUser._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    }).then(response => {
        if (response.ok) {
          console.log('User updated successfully');
          navigate(`/${adminId}/users/update/success`);
        } else {
          throw new Error('Error updating user');
        }
      })
  };

  const selectUser = async (event) => {
    const selectedOption = await event.target.value;
    if(selectedOption !== '') {
      const user = users.find(user => user.email === selectedOption)
      setCurrentUser(user);
    }
  }

  return (
    <div className="container">
      <h1>Update User</h1>
        <select id="selected_user" onChange={selectUser} value={currentUser.email || ''}>
          <option value="">CHOOSE USER TO UPDATE</option>
          {users.map((user) => (
            <option key={user.id} value={user.email}>
              Name: {user.name} || Email: {user.email}
            </option>
          ))}
        </select>
        {console.log("currentUser: ",currentUser.name)}
      <form onSubmit={handleSubmit} value={currentUser}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="form-input" required
            value={name || currentUser.name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="form-input" required
            value={email || currentUser.email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input maxLength="16" type="password" id="password" name="password" className="form-input" required
            value={password || currentUser.password}  onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form><br/>
      <Link to={`/${adminId}/home`} className="button">Go Back</Link>
    </div>
  );
}

export default UpdateUser;
