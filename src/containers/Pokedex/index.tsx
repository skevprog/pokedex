import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Pokemon } from '../../utils/types';
import { API_URL } from '../../api/constants';

import useFetch, { FetchHook } from '../../hooks/useFetch';

import Card from './components/Card';
import Pagination from '../../components/Pagination';

import './styles.css';

const defaultLimit = 10;

interface ApiResult {
  count: number;
  results: Pokemon[];
}

function Pokedex(): JSX.Element {
  const [total, setTotal] = useState<number>(1);
  const [page, setPage] = useState<number>(0);

  const { data, isPending, error }: FetchHook<ApiResult> = useFetch(`${API_URL}/pokemon?limit=${defaultLimit}&offset=${defaultLimit * page}`);
  useEffect(() => {
    if (data?.count) {
      setTotal(data?.count);
    }
  }, [data?.count]);

  const renderPokemons = () => (data?.results && data.results?.length > 0
    ? data?.results.map((pokemon: Pokemon) => (
      <Link key={pokemon.id} className="nav-link" to={`/${pokemon.name}`}>
        <Card pokemon={pokemon} />
      </Link>
    ))
    : <h2>No Pokemons</h2>);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <h1 className="center-text">Pokedex</h1>
      {error ? <h2>{error}</h2> : (
        <>
          <Pagination
            onNextClick={nextPage}
            onPreviousClick={previousPage}
            page={page}
            totalPages={total}
          />
          <div className="card-container">
            {isPending ? <h2>Loading Pokemons...</h2> : renderPokemons()}
          </div>

        </>
      )}
    </>
  );
}

export default Pokedex;
