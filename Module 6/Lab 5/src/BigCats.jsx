import React, { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm';

const initialCats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'snow-leopard.jpg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },
];

function BigCats() {
  const [cats, setCats] = useState(initialCats);

  const sortAlphabetically = () => {
    setCats([...cats].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const reverseList = () => {
    setCats([...cats].reverse());
  };

  const filterPanthera = () => {
    setCats(initialCats.filter(cat => cat.latinName.startsWith('Panthera')));
  };

  const resetList = () => {
    setCats(initialCats);
  };

  const addCat = (newCat) => {
    setCats([...cats, newCat]);
  };

  const deleteCat = (id) => {
    setCats(cats.filter(cat => cat.id !== id));
  };

  return (
    <div>
      <h1>Big Cats</h1>
      <AddCatForm onAddCat={addCat} />
      <div>
        <button onClick={sortAlphabetically}>Sort Alphabetically</button>
        <button onClick={reverseList}>Reverse List</button>
        <button onClick={filterPanthera}>Filter Panthera</button>
        <button onClick={resetList}>Reset List</button>
      </div>
      <ul>
        {cats.map(cat => (
          <SingleCat key={cat.id} cat={cat} onDelete={deleteCat} />
        ))}
      </ul>
    </div>
  );
}

export default BigCats;
