import React, { createContext, useContext, useMemo, useState } from 'react';

const context = createContext();

function GlobalContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [drawers, setDrawers] = useState({ sideMenuBar: false });

  const value = useMemo(() => ({
    user,
    setUser,
    drawers,
    setDrawers,
  }));

  return <context.Provider value={value}>{children}</context.Provider>;
}

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(context);
