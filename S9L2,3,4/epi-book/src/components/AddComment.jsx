import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'


const AuthKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTk5ODc2NGEzZTQwNjAwMTg5MjZkOTkiLCJpYXQiOjE3MDQ5MDM2MDEsImV4cCI6MTcwNjExMzIwMX0.uMkMEWUCLU3oE_X4ObGLw-YiXHdXqTHlnOG0qto_FZY'


/* export default class AddComment extends Component {
    state = {
        comment: '',
        rate: 0,
        elementId: this.props.bookID
    }

    handleComment = (e) => {
        console.log(e.target.value)
        this.setState({ comment: e.target.value })
    }

    handleRate = (e) => {
        console.log(e.target.value)
        this.setState({ rate: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.comment + ' - rate: ' + this.state.rate)
        fetch('https://striveschool-api.herokuapp.com/api/comments', {
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + AuthKey,
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
        this.setState({comment:'', rate:0})
    }

   

    render() {
        return (
            <div>

                <Form className='my-3' >
                    <Form.Group controlId="comment">
                        <Form.Label>Add a comment</Form.Label>
                        <Form.Control

                            type="textarea"
                            placeholder="Write your comment here"
                            value={this.state.comment}
                            onChange={(this.handleComment)}
                        />
                    </Form.Group>
                    <Form.Group controlId="rate">
                        <Form.Label>Rate the book</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={this.handleRate}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                    </Form.Group>
                    <Button type='submit' variant='success' onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </div>)

    }
} */

export default function AddComment(props) {
    

    const [comment, setComment] = useState('')
    const [rate, setRate] = useState(0)
    const elementId = useState(props.bookID)

    let fetchBody = {
        "comment": comment,
        "rate": rate,
        "elementId": elementId
    }

    let handleComment = (e) => {
        console.log(e.target.value)
        setComment(e.target.value)
    }

    let handleRate = (e) => {
        console.log(e.target.value)
        setRate(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(comment + ' - rate: ' + rate)
        fetch('https://striveschool-api.herokuapp.com/api/comments', {
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + AuthKey,
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(fetchBody)
        }).then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
        setComment('')
        setRate(0)
    }



        return (
            <div>

                <Form className='my-3' >
                    <Form.Group controlId="comment">
                        <Form.Label>Add a comment</Form.Label>
                        <Form.Control

                            type="textarea"
                            placeholder="Write your comment here"
                            value={comment}
                            onChange={handleComment}
                        />
                    </Form.Group>
                    <Form.Group controlId="rate">
                        <Form.Label>Rate the book</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={handleRate}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                    </Form.Group>
                    <Button type='submit' variant='success' onClick={handleSubmit}>Submit</Button>
                </Form>
            </div>)

    }

