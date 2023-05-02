import './DeleteUser.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DeleteUser() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch(`/api/users/delete/${currentUser._id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
        if (response.ok) {
          console.log('User deleted successfully');
          navigate('/api/users/delete/success');
        } else {
          throw new Error('Error deleting user');
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
      <h1>Delete User</h1>
        <form onSubmit={handleSubmit} value={currentUser}>
            <select id="selected_user" onChange={selectUser} value={currentUser.email || ''}>
            <option value="">CHOOSE USER TO UPDATE</option>
            {users.map((user) => (
                <option key={user.id} value={user.email}>
                Name: {user.name} || Email: {user.email}
                </option>
            ))}
            </select>
            {console.log("currentUser: ",currentUser.name)}
            
            <button type="submit" className="btn">Submit</button>
        </form>
    </div>
  );
}

export default DeleteUser;
