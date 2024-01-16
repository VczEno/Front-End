import './App.css';
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import Section from './components/Section'
import fantasy from './json/fantasy.json'
import history from './json/history.json'
import horror from './json/horror.json'
import romance from './json/romance.json'
import scifi from './json/scifi.json'
let booksArr= [...fantasy, ...history, ...horror, ...romance, ...scifi]

function App() {
  return (
    <>
    <MyNav></MyNav>
    <Welcome></Welcome>
    <Section books={booksArr}></Section>
    
    <MyFooter></MyFooter>

    </>
  );
}

export default App;
