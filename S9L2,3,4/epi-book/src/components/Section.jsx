import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BookList from './BookList'
import CommentArea from './CommentArea'

export default class Section extends Component {
    state= {
      selectedBook: ''
    }

  bookSelect = (asin) => this.setState(()=> ({selectedBook: asin}))

  render() {
    return (
      <Container>
        <Row>
            <Col xs={6}> 
            <BookList books={this.props.books} bookSelect={this.bookSelect} />
            </Col>
            <Col xs={6}>
            <CommentArea bookID={this.state.selectedBook} />
            </Col>
        </Row>
      </Container>
    )
  }
}
