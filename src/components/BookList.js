import { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import { ThemeContext } from '../context/ThemeContext'

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { books } = useContext(BookContext)

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
