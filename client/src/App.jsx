import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './components/profile/Profile';
import Home from './components/home/Home'
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
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/login' element={<Login/>}/> */}
          {/* <Route path='/conntact' element={<Contact/>}/> */}
          <Route path='/profile/home' element={<Profile/>}/>
          <Route path='/profile/users' element={<Users/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/profile/users/new' element={<AddUser/>}/>
          <Route path='/profile/users/update' element={<UpdateUser/>}/>
          <Route path='/profile/users/delete' element={<DeleteUser/>}/>
          <Route path='/profile/users/new/success' element={<Success message='Added new user'/>}/>
          <Route path='/profile/users/update/success' element={<Success message='Updated user'/>}/>
          <Route path='/profile/users/delete/success' element={<Success message='Deleted user'/>}/>
        </Routes>     
      </BrowserRouter>  
      <Footer/>   
    </div>
  );
}

export default App;
