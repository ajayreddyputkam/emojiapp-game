// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachObject, checkingEmoji} = props
  const {emojiUrl, emojiName, id} = eachObject
  const checkEmoji = () => {
    checkingEmoji(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="emoji-button" onClick={checkEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
