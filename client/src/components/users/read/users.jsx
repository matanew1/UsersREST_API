import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Users.css';
import Sort from '../operations/Sort';

function Users() {
  const [users, setUsers] = useState([]);
  const [showPassword, setShowPassword] = useState([]);
  const [sortby, setSortby] = useState('id');
  const { adminId } = useParams();

  useEffect(() => {
    fetch(`/api/${adminId}/users`)
      .then(response => response.json())
      .then(async data => {
        const userObjects = await Promise.all(data.map(async userId => {
          const response = await fetch(`/api/${adminId}/users/${userId}`);
          return response.json();
        }));
        setUsers(userObjects);
        setShowPassword(Array(userObjects.length).fill(false));
      });
  }, [adminId]);


  const toggleShowPassword = (index) => {
    setShowPassword(prevState => {
      const newState = [...prevState];
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
      <Link to={`/${adminId}/home`} className="button">Go Back</Link>
    </div>
  );
}

export default Users;
