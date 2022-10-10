import './App.css'
import Film from './pages/Film'
import Musique from './pages/Musique'
import CardList from './card_list/CardList'

function App() {

  return (
    <div className="App">
      <h1>Bienvenue dans la Biblio-Tech</h1>
      
      <Musique />

      <Film />

    </div>
  )
}

export default App
