import BookList from './components/BookList'
import Navbar from './components/Navbar'
import ToggleTheme from './components/ToggleTheme'
import AuthContextProvider from './context/AuthContext'
import BookContextProvider from './context/BookContext'
import ThemeContextProvider from './context/ThemeContext'

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
