import { Link } from 'react-router-dom';

import Pokedex from '../../containers/Pokedex';

import './styles.css';

export default function Home() {
  return (
    <>
      <h1 className="center-text">Pokedex</h1>
      <Pokedex />
      <div className="button-container">
        <Link to="/create-pokemon">
          <button type="button" className="button">
            Create Pokemon
          </button>
        </Link>
      </div>
    </>
  );
}
