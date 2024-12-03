import React, { createContext, useState, useContext } from 'react';

// Create the User Context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Try to get user data from localStorage (or set defaults)
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null; // If no user, default to null
  });

  // Save user to localStorage whenever the user state changes
  const saveUser = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Save user data to localStorage
  };

  const addHaulerData = (haulerData) => {
    const updatedUser = { ...user, haulers: haulerData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };
  
  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, saveUser, signOut, addHaulerData }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
