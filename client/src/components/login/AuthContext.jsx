import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    const handleUnload = () => {
      localStorage.removeItem('isLoggedIn');
    };
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
    return () => {
      window.removeEventListener('beforeunload', handleUnload, handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const toggleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
