import { useThemeContext } from '../context/ThemeContext'
import { useBookContext } from '../context/BookContext'

const BookList = () => {
  const { isLightTheme, light, dark } = useThemeContext()
  const { books } = useBookContext()


  const theme = isLightTheme ? light : dark
  return (
    <div
      className='book-list'
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map(({ title, id }) => (
          <li key={id} style={{ background: theme.ui }}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
