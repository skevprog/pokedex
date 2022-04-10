import { Pokemon } from '../../utils/types';
import Card from './components/Card';

import './styles.css';

interface PokedexProps {
  pokemons: Pokemon[];
}

function Pokedex({ pokemons }: PokedexProps): JSX.Element {
  return (
    <div className="card-container">
      {pokemons.map((pokemon: Pokemon) => (<Card key={pokemon.id} pokemon={pokemon} />))}
    </div>
  );
}

export default Pokedex;
