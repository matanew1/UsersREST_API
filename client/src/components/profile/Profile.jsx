import { useParams, Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const { adminId } = useParams();

  return (
    <div className="Profile">
      <main>
        <h1>User Management</h1>
        <nav>
          <ul>
            <Link to={`/${adminId}/users`}>See All Users</Link>
            <Link to={`/${adminId}/users/new`}>Add A New User</Link>
            <Link to={`/${adminId}/users/update`}>Update A User</Link>
            <Link to={`/${adminId}/users/delete`}>Delete A User</Link>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default Profile;
