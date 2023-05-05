import './Success.css';
import { useParams, Link } from 'react-router-dom';

function Success(props) {

  const {adminId} = useParams();
  
  const {message} = props;
  console.log(message)
  return (
    <div className="Success">
      <main>
        <h1>{message}</h1>
        <nav>
          <ul>
            <Link to={`/${adminId}/users`} className="button">See All Users</Link>
            <Link to={`/${adminId}/home`} className="button">Go Back</Link>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default Success;