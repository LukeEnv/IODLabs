import React from 'react';

function SingleCat({ cat, onDelete }) {
  return (
    <li style={{ listStyleType: 'none', margin: '10px 0' }}>
      <img src={cat.image} alt={cat.name} style={{ width: '100px', height: 'auto' }} />
      <h2>{cat.name}</h2>
      <p><em>{cat.latinName}</em></p>
      <button onClick={() => onDelete(cat.id)}>Delete</button>
    </li>
  );
}

export default SingleCat;
