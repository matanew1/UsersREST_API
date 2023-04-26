import './Success.css';

function Success() {
  return (
    <div className="Success">
      <main>
        <h1>Added New User...</h1>
        <nav>
          <ul>
            <li><a href="/api/users">See All Users</a></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default Success;