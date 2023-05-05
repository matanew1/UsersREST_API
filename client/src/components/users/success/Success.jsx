import './Success.css';
import { useParams } from 'react-router-dom';

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
            <li><a href={`/${adminId}/users`}>See All Users</a></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default Success;