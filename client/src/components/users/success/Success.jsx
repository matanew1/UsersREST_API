import './Success.css';

function Success(props) {
  
  const {message} = props;
  console.log(message)
  return (
    <div className="Success">
      <main>
        <h1>{message}</h1>
        <nav>
          <ul>
            <li><a href="/profile/users">See All Users</a></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default Success;