import React, { createContext, useContext, useState } from 'react';

export const statusContext = createContext();

export function StatusProvider({ children }) {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <statusContext.Provider value={{ isOnline, setIsOnline }}>
      {children}
    </statusContext.Provider>
  );
}

export const useOnlineStatus = () => useContext(statusContext);
