import React, { useEffect, useState } from 'react';
import './users.css';

function Users() {
  const [users, setUsers] = useState([]);
  const [showPassword, setShowPassword] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setShowPassword(Array(data.length).fill(false));
      });
  }, []);

  const toggleShowPassword = (index) => {
    setShowPassword(prevState => {
      const newState = [...prevState];
      console.log(newState)
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="Users">
      <main>
        <h1>All Users</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Show Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{showPassword[index] ? user.password : '••••••••••••••'}</td>
                <td><button onClick={() => toggleShowPassword(index)}>
                  {showPassword[index] ? 'Hide' : 'Show'}
                </button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <button className="btn-back" onClick={() => { window.location.href = '/api/home' }}>Go to Home</button>
      </main>
    </div>
  );
}

export default Users;