import { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  return (
    <ApplicationContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
