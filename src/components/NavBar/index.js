// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOver} = props
  const displayingNavScore = isGameOver ? (
    ''
  ) : (
    <div className="score-container-nav">
      <p className="score-nav">Score: {score}</p>
      <p className="total-score-nav">Top Score: {topScore}</p>
    </div>
  )

  return (
    <div className="navbar-info-container">
      <div className="emoji-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-logo-name">Emoji Game</h1>
      </div>
      {displayingNavScore}
    </div>
  )
}

export default NavBar
