/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {onClickedIdList: [], score: 0, topScore: 0, isGameOver: false}

  checkingEmoji = id => {
    const {onClickedIdList, score, topScore} = this.state
    const {emojisList} = this.props

    if (onClickedIdList.includes(id)) {
      const highestScore = score > topScore ? score : topScore
      this.setState(prevState => ({
        score: prevState.score,
        topScore: highestScore,
        isGameOver: !prevState.isGameOver,
      }))
    } else {
      this.setState(prevState => {
        if (prevState.onClickedIdList.length === emojisList.length - 1) {
          return {
            onClickedIdList: [...prevState.onClickedIdList, id],
            score: prevState.score + 1,
            topScore: prevState.score + 1,
            isGameOver: !prevState.isGameOver,
          }
        }
        return {
          onClickedIdList: [...prevState.onClickedIdList, id],
          score: prevState.score + 1,
        }
      })
    }
  }

  playAgain = () => {
    this.setState({onClickedIdList: [], score: 0, isGameOver: false})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  contentToDisplay = (onClickedIdList, score, topScore, isGameOver) => {
    const {emojisList} = this.props
    const shuffledList = this.shuffledEmojisList()

    if (isGameOver) {
      return (
        <WinOrLoseCard
          resultScore={score}
          emojisList={emojisList}
          playAgain={this.playAgain}
        />
      )
    }
    return (
      <ul className="emoji-list-container">
        {shuffledList.map(eachObject => (
          <EmojiCard
            eachObject={eachObject}
            key={eachObject.id}
            checkingEmoji={this.checkingEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {onClickedIdList, score, topScore, isGameOver} = this.state

    const displayingContent = this.contentToDisplay(
      onClickedIdList,
      score,
      topScore,
      isGameOver,
    )

    return (
      <div className="bg-container">
        <div className="navbar-container">
          <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        </div>
        <div className="emoji-card-main-container">{displayingContent}</div>
      </div>
    )
  }
}

export default EmojiGame
