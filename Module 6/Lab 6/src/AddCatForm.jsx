import React, { useState } from 'react';

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && latinName && image) {
      onAddCat({ id: Date.now(), name, latinName, image });
      setName('');
      setLatinName('');
      setImage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Latin Name"
        value={latinName}
        onChange={(e) => setLatinName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit">Add Cat</button>
    </form>
  );
}

export default AddCatForm;
