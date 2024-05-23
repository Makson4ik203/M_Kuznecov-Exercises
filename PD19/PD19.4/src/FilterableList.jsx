import React, { useState } from 'react';
import './FilterableList.css';

const FilterableList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="filterable-list">
      <input
        type="text"
        placeholder="Paieška..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <ul className="item-list">
        {filteredItems.map((item, index) => (
          <li key={index} className="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterableList;
