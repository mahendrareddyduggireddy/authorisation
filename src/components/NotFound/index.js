import './index.css'

const NotFound = props => {
  const homeFunc = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
        height={100}
        width={100}
      />
      <h1>Oops the thing you are searching for could not be found</h1>
      <button onClick={homeFunc} type="button">
        Home
      </button>
    </div>
  )
}
export default NotFound
