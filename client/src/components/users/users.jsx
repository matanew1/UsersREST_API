import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './users.css'

function Users() {
    const [users, setUsers] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
  
    useEffect(() => {
      fetch('/api/users')
        .then(response => response.json())
        .then(data => {
          setUsers(data);
        });
    }, []);
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="Users">
        <Header />
        <main>
          <h1>All Users</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{showPassword ? user.password : '•••••••••••••••••'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={toggleShowPassword}>{showPassword ? 'Hide' : 'Show'}</button>
          <br/><br/><br/>
          <button onClick={() => {window.location.href='/api/home'}}>Go to Home</button>
        </main>
        <Footer />
      </div>
    );
  }
  

export default Users;
