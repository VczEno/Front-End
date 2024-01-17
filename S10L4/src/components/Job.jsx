import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addFav } from '../actions/action'
import { useDispatch } from 'react-redux'

const Job = ({ data }) =>{
   const dispatch=useDispatch()
  
  return(

  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }} >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
      <Button variant='outline-secondary' className='float-end'onClick={() => dispatch(addFav(data.company_name))}>Add to Favorite</Button>
    </Col>
    
    
  </Row>
)
}
export default Job
