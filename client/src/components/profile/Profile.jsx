import { useParams } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const { adminId } = useParams();

  return (
    <div className="Profile">
      <main>
        <h1>User Management</h1>
        <nav>
          <ul>
            <li><a href={`/${adminId}/users`}>See All Users</a></li>
            <li><a href={`/${adminId}/users/new`}>Add A New User</a></li>
            <li><a href={`/${adminId}/users/update`}>Update A User</a></li>
            <li><a href={`/${adminId}/users/delete`}>Delete A User</a></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default Profile;
