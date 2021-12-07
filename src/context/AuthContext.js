import { useState, createContext, useContext } from 'react'

const AuthContext = createContext(null)

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const toggleAuthenticated = () => setIsAuthenticated(!isAuthenticated)

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext =() => useContext(AuthContext)

export default AuthContextProvider
