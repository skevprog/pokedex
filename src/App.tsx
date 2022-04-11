import { useEffect, useState } from 'react';

import axios from 'axios';

import { API_URL } from './api/constants';

import Pokedex from './containers/Pokedex';
import Pagination from './components/Pagination';

import { Pokemon } from './utils/types';

import './App.css';

const limit = 10;

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[] | []>([]);
  const [total, setTotal] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const fetchPokemons = () => {
    setLoading(true);
    axios.get((`${API_URL}pokemon?limit=${limit}&offset=${limit * page}`))
      .then(({ data }) => {
        setTotal(Math.ceil(data.count / limit)); // Round max pages totalPokemons / limit === total pages
        return Promise.all(data.results.map((el) => axios.get(el.url).then((resp) => resp.data)));
      })
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
  }, [page]);

  const renderPokemons = () => (pokemons?.length > 0
    ? <Pokedex pokemons={pokemons} /> : <h2>No Pokemons</h2>);

  const nextPage = () => {
    if (page + 1 === total) { return; }
    setPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    if (page === 0) return;
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <Pagination onNextClick={nextPage} onPreviousClick={previousPage} page={page} totalPages={total} />
      <h1>Pokedex Home</h1>
      {loading ? <h2>Loading pokemons</h2> : renderPokemons()}
    </div>
  );
}

export default App;
