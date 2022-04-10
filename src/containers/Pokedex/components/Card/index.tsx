import { Pokemon } from '../../../../utils/types';
import './styles.css';

interface CardProps {
  pokemon: Pokemon
}

function Card({ pokemon }: CardProps): JSX.Element {
  const { name, sprites: { front_default: image } } = pokemon;
  return (
    <div className="card">
      <p>{name}</p>
      <img alt={name} className="card-image" src={image} />
    </div>
  );
}

export default Card;
