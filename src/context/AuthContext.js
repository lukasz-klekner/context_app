import { Component, createContext } from 'react'

export const AuthContext = createContext(null)

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  }

  toggleAuthenticated = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated,
    })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuthenticated: this.toggleAuthenticated }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider
