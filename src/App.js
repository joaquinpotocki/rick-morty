import imgeRickMorty from "./img/rick-morty.png"
import './App.css';
import { useState } from "react";
import Characters from "./components/Characters";

function App() {

  const [characters, setCharacters] = useState(null)

  const regApi = async () => { //Hacemos a esta constante asincrona para hacer peticiones a los datos
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json(); //tratamos a los datos obtenidos mediante la peticion a formato json

    setCharacters(characterApi.results); //seteando en el estado lo obtenido
  };

  //console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? ( //Cuando tengo algo en character mostrar los mismos
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : ( //cuando no, mostrar el home
          <>
            <img src={imgeRickMorty} alt="Rick & Morty" clasName="img-home"></img>
            <button onClick={regApi} className="btn-search">Buscar</button>
          </>
        )}


      </header>
    </div>
  );
}

export default App;
