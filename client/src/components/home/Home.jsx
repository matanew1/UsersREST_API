import Header from '../header/header';
import Footer from '../footer/footer';

function Home() {
  return (
    <div className="Home">
      <Header />
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
      <Footer />
    </div>
  );
}

export default Home;
