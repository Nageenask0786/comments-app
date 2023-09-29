import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {Name: '', Comment: '', commentsList: []}

  onAddComment = event => {
    event.preventDefault()
    const {Name, Comment} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name: Name,
      comment: Comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      Name: '',
      Comment: '',
    }))
  }

  toggleLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return {each}
      }),
    }))
  }

  filterComments = id => {
    this.setState(prevstate => ({
      commentsList: prevstate.commentsList.filter(each => id !== each.id),
    }))
  }

  onChangeName = event => {
    this.setState({Name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({Comment: event.target.value})
  }

  render() {
    const {Name, Comment, commentsList} = this.state

    return (
      <div className="main-container">
        <div className="card1">
          <div className="card2">
            <h1 className="heading">Comments</h1>
            <p className="para">Say something about 4.O Technologies</p>
            <form className="card2" onSubmit={this.onAddComment}>
              <input
                type="text"
                placeholder="Your Name"
                value={Name}
                onChange={this.onChangeName}
              />
              <textarea
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                rows="8"
                cols="40"
                value={Comment}
              />
              <button type="submit">Add Comment</button>
            </form>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <p>
          <span>{commentsList.length}</span> Comments
        </p>

        <ul className="comments-container">
          {commentsList.map(each => (
            <CommentItem
              CommentDetails={each}
              key={each.id}
              filterComments={this.filterComments}
              toggleLiked={this.toggleLiked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
