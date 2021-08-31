import './App.css';
const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

function App() {
  P.getPokemonByName("zapdos").then(function(response) {
    console.log(response)
  })
  return (
    <div style={{ fontSize: 100 }}>
      Hello Shawn!
    </div>
  );
}

export default App;
