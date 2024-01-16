import { Container, Row, Col, Card } from 'react-bootstrap'


export default function AllTheBooks() {
    return(
        <>
        <Container>
            <Row>
               {booksComplete.map(b  => <Col>
                                        <Card>
                                            <Card.Img variant="top" src={b.img} />
                                            <Card.Body>
                                            <Card.Text>
                                                {b.title}
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                </Col>)}
            </Row>
        </Container>
        </>
    )
}
    
    