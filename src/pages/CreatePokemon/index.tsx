import React from 'react';
import Button from '../../components/Button';
import Title from '../../components/Title';

import useForm from '../../hooks/useForms';

import './styles.css';

interface CreatePokemonFormErrors {
  name?: string;
  type?: string;
  physicalInfo?: string;
  description?: string
}

function CreatePokemon() {
  const validate = (values) => {
    const errors: CreatePokemonFormErrors = {};
    if (!values.name || !values.type) {
      errors.name = 'Name is required';
      errors.type = 'Type is required';
    }
    if (!values.height || !values.weight) {
      errors.physicalInfo = 'Value should be a valid number';
    }
    if (!values.description || values.description?.length < 30) {
      errors.description = 'Description should have more that 30 characters';
    }
    return errors;
  };

  function createPokemon() {
    alert('Form submited successfully');
  }

  const {
    handleChange, handleSubmit, values, errors,
  } = useForm(createPokemon, validate);

  return (
    <div>
      <Title className="center-text" text="Create Pokemon" />
      <form className="form-container">
        <input
          className="form-input"
          type="text"
          placeholder="Name"
          value={values.name || ''}
          name="name"
          onChange={handleChange}
        />
        {errors.name && (
        <p className="danger">{errors.name}</p>
        )}
        <input
          className="form-input"
          type="text"
          placeholder="Type"
          value={values.type || ''}
          name="type"
          onChange={handleChange}
        />
        {errors.type && (
        <p className="danger">{errors.type}</p>
        )}
        <input
          className="form-input"
          type="number"
          placeholder="Height"
          value={values.height || 0}
          name="height"
          onChange={handleChange}
        />
        {errors.physicalInfo && (
        <p className="danger">{errors.physicalInfo}</p>
        )}
        <input
          className="form-input"
          type="number"
          placeholder="Weight"
          value={values.weight || 0}
          name="weight"
          onChange={handleChange}
        />
        {errors.physicalInfo && (
        <p className="danger">{errors.physicalInfo}</p>
        )}
        <textarea
          className="form-input"
          placeholder="Description"
          value={values.description || ''}
          name="description"
          onChange={handleChange}
        />
        {errors.description && (
        <p className="danger">{errors.description}</p>
        )}
        <Button disabled={false} label="Create" onClick={handleSubmit} />
      </form>

    </div>
  );
}

export default CreatePokemon;
