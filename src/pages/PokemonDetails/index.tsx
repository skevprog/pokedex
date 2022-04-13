import { useParams } from 'react-router-dom';

import { API_URL } from '../../api/constants';
import { Pokemon } from '../../utils/types';

import useFetch, { FetchHook } from '../../hooks/useFetch';

import './styles.css';
import { capitalizeWord } from '../../utils/helpers';

function PokemonDetails(): JSX.Element {
  const { pokemonName } = useParams();

  const { data: pokemon, isPending, error }: FetchHook<Pokemon> = useFetch(`${API_URL}/pokemon/${pokemonName}`);

  const renderPokemon = () => (
    <div className="pokemon-info-container">
      <h2>
        {capitalizeWord(pokemon?.name)}
      </h2>
      <div className="info">
        <img alt={pokemon?.name} src={pokemon?.sprites?.front_default} />
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

  if (error) return <h2>{error}</h2>;
  return isPending ? <h2>Loading</h2> : renderPokemon();
}

export default PokemonDetails;
