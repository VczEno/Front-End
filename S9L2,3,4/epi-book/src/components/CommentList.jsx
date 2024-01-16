import React, { Component } from 'react'
import SingleComment from './SingleComment'

export default class CommentList extends Component {
  render() {
    return (
      <div>
        <h3>Commenti:</h3>
        <ul>
        {this.props.AllComm.map(c => <SingleComment singleComm={c} key={c._id}/>)}
        </ul>
        

      </div>
    )
  }
}
