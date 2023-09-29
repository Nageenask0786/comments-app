import {formatDistanceToNow} from 'date-fns'

import './index.css'

// Write your code here
const likedImageUrl =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

const likeImageUrl =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

const CommentItem = props => {
  const {CommentDetails, filterComments, toggleLiked} = props
  const {name, comment, isLiked, date, initialClassName, id} = CommentDetails
  const fdate = formatDistanceToNow(date)
  const imgUrl = isLiked ? likedImageUrl : likeImageUrl

  const deleteComment = () => {
    filterComments(id)
  }

  const clickLike = () => {
    toggleLiked(id)
  }

  return (
    <li className="list-items">
      <div className="align1">
        <div className={`${initialClassName} comment-item`}>
          <p>{name[0].toUpperCase()}</p>
        </div>
        <p className="name">{name}</p>
        <p className="date">{fdate}</p>
      </div>

      <p className="comment">{comment}</p>
      <div className="align1">
        <div className="ss">
          <img src={imgUrl} alt="like" className="like-image" />
          <button type="button" onClick={clickLike} className="like">
            Like
          </button>
        </div>
        <button
          type="button"
          onClick={deleteComment}
          data-testid="delete"
          className="like"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="like-image"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
