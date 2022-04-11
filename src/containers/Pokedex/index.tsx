import { useEffect, useState } from 'react';

import axios from 'axios';

import { Pokemon } from '../../utils/types';
import { API_URL } from '../../api/constants';

import Card from './components/Card';

import './styles.css';
import Pagination from '../../components/Pagination';

const defaultLimit = 10;

function Pokedex(): JSX.Element {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [total, setTotal] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const fetchPokemons = () => {
    setLoading(true);
    axios.get((`${API_URL}pokemon?limit=${defaultLimit}&offset=${defaultLimit * page}`))
      .then(({ data }) => {
        setTotal(Math.ceil(data.count / defaultLimit)); // Round max pages totalPokemons / limit === total pages
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
    ? pokemons.map((pokemon: Pokemon) => (<Card key={pokemon.id} pokemon={pokemon} />)) : <h2>No Pokemons</h2>);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <Pagination
        onNextClick={nextPage}
        onPreviousClick={previousPage}
        page={page}
        totalPages={total}
      />
      <h1 className="center-text">Pokedex</h1>
      <div className="card-container">
        {loading ? <h2>Loading pokemons...</h2> : renderPokemons()}
      </div>
    </>
  );
}

export default Pokedex;
