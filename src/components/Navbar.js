import { useContext } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { useThemeContext } from '../context/ThemeContext'

const Navbar = () => {
  const { isAuthenticated, toggleAuthenticated } = useAuthContext()
  const { isLightTheme, light, dark } = useThemeContext()

  const theme = isLightTheme ? light : dark
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuthenticated}>
        {isAuthenticated ? 'Logged in' : 'Logged out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
