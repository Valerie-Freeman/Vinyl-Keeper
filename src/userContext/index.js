import React, { useEffect, useState } from 'react'

const UserContex = React.createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ id: null })

  useEffect(() => {
    console.log('UserProvider rendered')
    setUser(JSON.parse(localStorage.getItem('vinyl_user')))
  }, [])

  return <UserContex.Provider value={user}>{children}</UserContex.Provider>
}

export { UserContex, UserProvider }
