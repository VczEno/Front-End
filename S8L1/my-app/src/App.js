import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import {ArrayComponent} from './components/arrayComponent';
import Fetch from './components/fetchComp';

const users = [
  {id: 1, name: 'John', lastName: 'Smith', city: 'San Francisco'}, 
  {id: 2, name: 'Mario', lastName: 'Rossi', city: 'Roma'},
  {id: 3, name: 'Jane', lastName: 'Smith', city: 'London'}
]

function App() {
  return(
  <>   <ButtonComponent btn='Testo inserito tramite props' />
      <ImageComponent src="https://images.pexels.com/photos/14925518/pexels-photo-14925518.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='mappamondo'/>
        <ArrayComponent users={users}></ArrayComponent>
        <Fetch></Fetch> 
  </>
  
  );
}

export default App;
