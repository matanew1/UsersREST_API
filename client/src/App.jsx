import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Users from './components/users/users';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import AddUser from './components/users/AddUser';
import Success from './components/users/Success';
import UpdateUser from './components/users/UpdateUser';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/api/home' element={<Home/>}/>
          <Route path='/api/users' element={<Users/>}/>
          <Route path='/api/users/new' element={<AddUser/>}/>
          <Route path='/api/users/update' element={<UpdateUser/>}/>
          <Route path='/api/users/new/success' element={<Success/>}/>
          <Route path='/api/users/update/success' element={<Success/>}/>
        </Routes>     
      </BrowserRouter>  
      <Footer/>   
    </div>
  );
}

export default App;
