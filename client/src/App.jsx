import './App.css';
import {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Home from './components/home/Home';
import Users from './components/users/read/Users';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import AddUser from './components/users/create/AddUser';
import Success from './components/users/success/Success';
import UpdateUser from './components/users/update/UpdateUser';
import DeleteUser from './components/users/delete/DeleteUser';
import AboutPage from './components/about/AboutPage';
import Login from './components/login/Login';
import { AuthProvider } from './components/login/AuthContext';
import Authentication from './components/login/Authentication'
import SignUpPage from './components/login/SignUpPage';

function App() {

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Make a fetch request to /api/logout
      fetch('/api/logout', {
        method: 'GET',
      }).then(response => {
        response.json().then(data => console.log(data))
        if (response.ok) {
          console.log("Admin logged out")
        } else {
          throw new Error('Error logout admin');
        }
      });

      // The following line is optional, it shows a confirmation dialog to the user
      event.preventDefault();
      event.returnValue = ''; // Some browsers require a non-empty string
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/:adminId/*' element={<Authentication>
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
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}


export default App;
