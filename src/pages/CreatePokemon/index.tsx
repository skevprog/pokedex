import { useState } from 'react';
import Button from '../../components/Button';

import './styles.css';

function CreatePokemon() {
  const [formState, setFormState] = useState({
    name: '', type: '', description: '', height: 0, weight: 0,
  });

  const formCheck = () => !Object.values(formState).every((x) => x);

  const onClickHandler = () => {
    if (formCheck()) return;
    console.log('Create pokemon', formState);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <h1>Create Pokemon</h1>
      <form className="form-container">
        <input
          className="form-input"
          type="text"
          placeholder="Name"
          value={formState.name}
          name="name"
          onChange={handleOnChange}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Type"
          value={formState.type}
          name="type"
          onChange={handleOnChange}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Height"
          value={formState.height}
          name="height"
          onChange={handleOnChange}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Weight"
          value={formState.weight}
          name="weight"
          onChange={handleOnChange}
        />
        <textarea
          className="form-input"
          placeholder="Description"
          value={formState.description}
          name="description"
          onChange={handleOnChange}
        />
        <Button disabled={!!formCheck()} label="Create" onClick={onClickHandler} />
      </form>

    </div>
  );
}

export default CreatePokemon;
