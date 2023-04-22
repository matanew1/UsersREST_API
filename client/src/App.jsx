import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Users from './components/users/users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/api/home' element={<Home/>}/>
          <Route path='/api/users' element={<Users/>}/>
        </Routes>     
      </BrowserRouter>     
    </div>
  );
}

export default App;
