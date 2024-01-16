import { Card } from "react-bootstrap"
import {useState} from 'react'



/* export default class SingleBook extends Component {

    state = {
        selected: false
    }

   

    render() {
        return (
            <>

                <Card className={this.state.selected === true ? 'selected' : ''} >
                    <Card.Img variant="top" src={this.props.book.img} onClick={() => {
                        this.setState({ selected: !this.state.selected })
                        this.props.bookSelect(this.props.book.asin) 
                    }} />
                    <Card.Body>
                        <Card.Text>
                            {this.props.book.title}
                        </Card.Text>
                    </Card.Body>
                </Card>

              

            </>)
    }

} */

 export default function SingleBook(props)  {

    const [selected, setSelected] = useState(false)
    
        return (
            <>

                <Card className={selected === true ? 'selected' : ''} >
                    <Card.Img variant="top" src={props.book.img} onClick={() => {
                        setSelected(!selected)
                        props.bookSelect(props.book.asin) 
                    }} />
                    <Card.Body>
                        <Card.Text>
                            {props.book.title}
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/*    {this.state.selected && <CommentArea bookID={this.props.book.asin}></CommentArea>} */}

            </>)
    }


