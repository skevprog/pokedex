import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { API_URL } from '../../api/constants';
import { Pokemon } from '../../utils/types';

import './styles.css';

function PokemonInfo(): JSX.Element {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);

  useEffect(() => {
    const fetchPokemonByName = (name) => {
      axios.get(`${API_URL}/pokemon/${name}`)
        .then((data) => {
          setPokemon(data.data);
        })
        .catch((error) => { console.error(error); });
    };
    fetchPokemonByName(pokemonName);
  }, []);

  const renderPokemon = () => (
    <div className="pokemon-info-container">
      <h2>
        {pokemon?.name}
      </h2>
      <div className="info">
        <img alt={pokemon?.name} src={pokemon?.sprites.front_default} />
        <h3>
          Height:
          {' '}
          {pokemon?.height}
        </h3>
        <h4>
          Weight:
          {' '}
          {pokemon?.weight}
        </h4>
      </div>
    </div>
  );

  return renderPokemon();
}

export default PokemonInfo;
