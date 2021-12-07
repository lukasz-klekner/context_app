import { useThemeContext } from '../context/ThemeContext'

const ToggleTheme = () => {
  const { toggleTheme } = useThemeContext()

  return <button onClick={toggleTheme}> Toggle</button>
}

export default ToggleTheme
