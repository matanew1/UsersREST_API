import "./Profile.css";

function Profile() {
  return (
    <div className="Profile">
      <main>
        <h1>User Management</h1>
        <nav>
          <ul>
            <li><a href="/profile/users">See All Users</a></li>
            <li><a href="/profile/users/new">Add A New User</a></li>
            <li><a href="/profile/users/update">Update A User</a></li>
            <li><a href="/profile/users/delete">Delete A User</a></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default Profile;
