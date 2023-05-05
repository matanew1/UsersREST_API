import './DeleteUser.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

function DeleteUser() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
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
    fetch(`/api/${adminId}/users/delete/${currentUser._id}`, {
      method: 'DELETE'
    }).then(response => {
        if (response.ok) {
          console.log('User deleted successfully');
          navigate(`/${adminId}/users/delete/success`);
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
        </form><br/>
        <Link to={`/${adminId}/home`} className="button">Go Back</Link>
    </div>
  );
}

export default DeleteUser;
