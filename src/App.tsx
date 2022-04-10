import { useEffect, useState } from 'react';

import axios from 'axios';

import { API_URL } from './api/constants';

import Pokedex from './containers/Pokedex';

import { Pokemon } from './utils/types';

import './App.css';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPokemons = () => {
    setLoading(true);
    axios.get((`${API_URL}pokemon?limit=10&offset=0`))
      .then((response) => Promise.all(response.data.results.map((ele) => axios.get(ele.url).then((resp) => resp.data))))
      .then((pokemonsData: Pokemon[]) => {
        setPokemons(pokemonsData);
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const renderPokemons = () => (pokemons?.length > 0
    ? <Pokedex pokemons={pokemons} /> : <h2>No Pokemons</h2>);

  return (
    <div>
      <h1 className="center-text">Pokedex</h1>
      {loading ? <h2>Loading pokemons</h2> : renderPokemons()}
    </div>
  );
}

export default App;
