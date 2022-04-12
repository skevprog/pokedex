import { useState } from 'react';

import Loader from '../../../../components/Loader';

import { Pokemon } from '../../../../utils/types';

import './styles.css';

interface CardProps {
  pokemon: Pokemon
}

function Card({ pokemon }: CardProps): JSX.Element {
  const { name, sprites: { front_default: image } } = pokemon;
  const [loading, setLoading] = useState(true);
  return (
    <div className="card">
      <p>{name}</p>
      {loading && (
      <Loader
        customTextStyles="image-loader-text"
        customContainerStyles="card-image"
        customLoaderContent="Loading image..."
      />
      )}
      <div className={`${loading ? 'display-none' : 'display-block'}`}>
        <img alt={name} className="card-image" onLoad={() => setLoading(false)} src={image} />
      </div>
    </div>
  );
}

export default Card;
