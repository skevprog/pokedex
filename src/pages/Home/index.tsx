import { Link } from 'react-router-dom';
import Title from '../../components/Title';

import Pokedex from '../../containers/Pokedex';

import './styles.css';

export default function Home() {
  return (
    <>
      <Title className="center-text" text="Pokedex" />
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
