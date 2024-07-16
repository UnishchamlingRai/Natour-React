import { createContext, useContext, useState } from "react";

const UserContext = createContext();
function UserProvider({ children }) {
  const [user, setUser] = useState({});
  //   console.log("user From Providwer:",user)
  return (
    <UserContext.Provider
      value={{
        user,
        onSetUser: setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export default UserProvider;
