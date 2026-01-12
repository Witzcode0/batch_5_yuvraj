import React, { createContext, useState } from 'react'
import UserProfile from './UserProfile';

export const UserContext = createContext();

export const UsercontextProvider = () => {
    const [user, setUser] = useState({
        name: "Brijesh Gondaliya",
        age: 30,
        email: "brijesh.gondaliya@bit.com"
    });

  return (
    <div>
        <UserContext.Provider value={{user, setUser}}>
            <UserProfile />
        </UserContext.Provider>
    </div>
  )
}
