import React, { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import { Alert } from 'react-bootstrap'


const Url = "https://striveschool-api.herokuapp.com/api/books/"
const AuthKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTk5ODc2NGEzZTQwNjAwMTg5MjZkOTkiLCJpYXQiOjE3MDQ5MDM2MDEsImV4cCI6MTcwNjExMzIwMX0.uMkMEWUCLU3oE_X4ObGLw-YiXHdXqTHlnOG0qto_FZY'
/* export default class CommentArea extends Component {

  state = {
    comments: []
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.bookID !== prevProps.bookID) {
      fetch(Url + this.props.bookID + "/comments", {
        headers: { "Authorization": "Bearer" + { AuthKey } }
      })
        .then(response => response.json())
        .then(data => this.setState({ comments: data }))
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <>
        {this.props.bookID ?
          <>
            <CommentList AllComm={this.state.comments} />
            <AddComment bookID={this.props.bookID} />
          </>
          :
          <Alert>Seleziona un libro per mostrare la sezione commenti</Alert>}


      </>




    )
  }
} */

export default function CommentArea(props) {

  let [comments, setComments] = useState([])
  console.log(props)


useEffect(() => {
    fetch(Url + props.bookID + "/comments", {
      headers: { "Authorization": "Bearer" + { AuthKey } }
    })
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(err => console.log(err))
},[props.bookID])

/*   componentDidUpdate = (prevProps) => {
    if (props.bookID !== prevProps.bookID) {
      fetch(Url + props.bookID + "/comments", {
        headers: { "Authorization": "Bearer" + { AuthKey } }
      })
        .then(response => response.json())
        .then(data => setComments(data))
        .catch(err => console.log(err))
    }
  } */

  

    return (
      <>
        {props.bookID ?
          <>
            <CommentList AllComm={comments} />
            <AddComment bookID={props.bookID} />
          </>
          :
          <Alert>Seleziona un libro per mostrare la sezione commenti</Alert>}


      </>




    )
  }

