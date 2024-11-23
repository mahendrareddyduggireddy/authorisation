import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Home = props => {
  const {history} = props
  console.log(history)
  const logoutFunc = () => {
    Cookies.remove('jwtToken')
    history.replace('/login')
  }
  if (Cookies.get('jwtToken') === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="home-container">
      <nav className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          height={50}
          width={50}
        />
        <button type="button" onClick={logoutFunc}>
          Logout
        </button>
      </nav>
      <div className="div-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </div>
    </div>
  )
}
export default Home
