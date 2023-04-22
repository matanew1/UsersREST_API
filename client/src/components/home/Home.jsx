import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <main>
        <h1>User Management</h1>
        <nav>
          <ul>
            <li><a href="/api/users">See All Users</a></li>
            <li><a href="/api/users/new">Add A New User</a></li>
            <li><a href="/api/users/update">Update A User</a></li>
            <li><a href="/api/users/delete">Delete A User</a></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default Home;
