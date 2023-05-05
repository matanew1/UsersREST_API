import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Home from './components/home/Home';
import Users from './components/users/read/Users';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import AddUser from './components/users/create/AddUser';
import Success from './components/users/success/Success';
import UpdateUser from './components/users/update/UpdateUser';
import DeleteUser from './components/users/delete/DeleteUser';
import AboutPage from './components/about/AboutPage';
import Login from './components/login/Login';
import { AuthProvider } from './components/login/AuthContext';
import Authentication from './components/login/Authentication'

function App() {
  return (
    <AuthProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<AboutPage />} />
          {/* <Route path='/contact' element={<Contact/>}/> */}

          <Route path='/profile/*' element={<Authentication>
            <Routes>
              <Route path='home' element={<Profile />} />
              <Route path='users' element={<Users />} />
              <Route path='users/new' element={<AddUser />} />
              <Route path='users/update' element={<UpdateUser />} />
              <Route path='users/delete' element={<DeleteUser />} />
              <Route path='users/new/success' element={<Success message='Added new user' />} />
              <Route path='users/update/success' element={<Success message='Updated user' />} />
              <Route path='users/delete/success' element={<Success message='Deleted user' />} />
            </Routes>
          </Authentication>} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </AuthProvider>
  );
}

export default App;
