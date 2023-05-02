import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Users from './components/users/read/Users';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import AddUser from './components/users/create/AddUser';
import Success from './components/users/success/Success';
import UpdateUser from './components/users/update/UpdateUser';
import DeleteUser from './components/users/delete/DeleteUser';
import AboutPage from './components/header/about/AboutPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/api/home' element={<Home/>}/>
          <Route path='/api/users' element={<Users/>}/>
          <Route path='/api/about' element={<AboutPage/>}/>
          <Route path='/api/users/new' element={<AddUser/>}/>
          <Route path='/api/users/update' element={<UpdateUser/>}/>
          <Route path='/api/users/delete' element={<DeleteUser/>}/>
          <Route path='/api/users/new/success' element={<Success message='Added new user'/>}/>
          <Route path='/api/users/update/success' element={<Success message='Updated user'/>}/>
          <Route path='/api/users/delete/success' element={<Success message='Deleted user'/>}/>
        </Routes>     
      </BrowserRouter>  
      <Footer/>   
    </div>
  );
}

export default App;
