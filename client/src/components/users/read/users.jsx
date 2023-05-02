import React, { useEffect, useState } from 'react';
import './Users.css';
import Sort from '../operations/Sort';

function Users() {
  const [users, setUsers] = useState([]);
  const [showPassword, setShowPassword] = useState([]);
  const [sortby, setSortby] = useState('id');

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

  const sortBy = (value) => {
    const sortedUsers = [...users];
    if (value === 'name') {
      sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if(value === 'email') {
      sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
    } else {
      sortedUsers.sort((a, b) => a._id.localeCompare(b._id));
    }
    setUsers(sortedUsers);
    setSortby(value)
  };
  
  return (
    <div className="Users">
      <Sort sortBy={sortBy} />
      <main>
        <h1>All Users</h1>
        { sortby !== 'id' ? <h2>Sort By: {sortby}</h2> : ''}       
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
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{showPassword[index] ? user.password : '••••••••••'}</td>
                <td><button onClick={() => toggleShowPassword(index)}>
                  {showPassword[index] ? 'Hide' : 'Show'}
                </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Users;
