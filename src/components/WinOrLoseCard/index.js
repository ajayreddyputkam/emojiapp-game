// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {resultScore, emojisList, playAgain} = props

  const imageToDisplay =
    resultScore === emojisList.length
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const winOrLossText = resultScore === emojisList.length ? 'Won' : 'Lose'
  const isBestScore = resultScore === emojisList.length ? 'Best Score' : 'Score'

  const reStartGame = () => {
    playAgain()
  }

  return (
    <div className="result-card">
      <img src={imageToDisplay} alt="win or lose" className="result-image" />
      <div className="match-result-container">
        <h1 className="match-result">You {winOrLossText}</h1>
        <p className="best-score-des">{isBestScore}</p>
        <p className="score-best">{resultScore}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={reStartGame}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
