import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

class ToggleTheme extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ toggleTheme }) => <button onClick={toggleTheme}> Toggle</button>}
      </ThemeContext.Consumer>
    )
  }
}

export default ToggleTheme
