import { Col, Container, Row, Form, Button } from "react-bootstrap"
import SingleBook from "./SingleBook"
import { useState } from "react"


/* export default class BookList extends Component {

    state = {
        searchQuery: ''
        
    }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.searchQuery)
    }

    render() {

        return (
            <>
                <Container>
                    <Form className='my-5 text-center d-flex justify-content-evenly' noValidate onSubmit={this.handleSubmit}>
                        <Form.Group className='text-center'  controlId="validationCustom01">
                           
                            <Form.Control
                                required
                                type="text"
                                placeholder="Search..."
                                value={this.state.searchQuery}
                                onChange={(e) => {
                                    this.setState({ searchQuery: e.target.value })
                                    
                                }}
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </Container>
                <Container>
                <h3 className="text-center m-3">Numero di risultati: {this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).length}</h3>

                    <Row>

                        {this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).map((b, index) =>
                            <Col key={index} xs={4}>
                                <SingleBook book={b} bookSelect={this.props.bookSelect} >
                            
                                </SingleBook>
                            </Col>
                            
                        )}
                    </Row>
                </Container>
                
            </>
        )
    }

} */

export default function BookList(props) {

    const [search,setSearch]= useState('')


    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(search)
    } 

        return (
            <>
                <Container>
                    <Form className='my-5 text-center d-flex justify-content-evenly' noValidate onSubmit={handleSubmit}>
                        <Form.Group className='text-center'  controlId="validationCustom01">
                           
                            <Form.Control
                                required
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </Container>
                <Container>
                <h3 className="text-center m-3">Numero di risultati: {props.books.filter(b => b.title.toLowerCase().includes(search)).length}</h3>

                    <Row>

                        {props.books.filter(b => b.title.toLowerCase().includes(search)).map((b, index) =>
                            <Col key={index} xs={4}>
                                <SingleBook book={b} bookSelect={props.bookSelect} >
                            
                                </SingleBook>
                            </Col>
                            
                        )}
                    </Row>
                </Container>
                
            </>
        )
    }


