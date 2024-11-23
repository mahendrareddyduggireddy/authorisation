import './index.css'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {username: '', password: '', errMsg: '', anyErr: false}

  userFunc = event => {
    this.setState({username: event.target.value})
  }

  passwordFunc = event => {
    this.setState({password: event.target.value})
  }

  loginApiCall = async () => {
    const {username, password} = this.state
    const options = {
      method: 'POST',
      body: JSON.stringify({user_id: username, pin: password}),
    }
    const url = 'https://apis.ccbp.in/ebank/login'
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwtToken', data.jwt_token)
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errMsg: data.error_msg, anyErr: true})
    }
  }

  loginFunc = event => {
    event.preventDefault()
    this.loginApiCall()
  }

  render() {
    const {username, password, errMsg, anyErr} = this.state
    if (Cookies.get('jwtToken') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="whole-container">
        <div className="login-container">
          <div className="login-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              height={99}
              width={99}
            />
          </div>
          <form className="login-form-container" onSubmit={this.loginFunc}>
            <h1>Welcome Back!</h1>
            <div className="username-embed-container">
              <label htmlFor="username">USERNAME</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={this.userFunc}
                placeholder="Enter Username"
              />
            </div>
            <div className="password-embed-container">
              <label htmlFor="password">PASSWORD</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={this.passwordFunc}
                placeholder="Enter Password"
              />
            </div>
            <button type="submit" className="btn-style">
              Login
            </button>
            {anyErr && <p>{errMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default Login
