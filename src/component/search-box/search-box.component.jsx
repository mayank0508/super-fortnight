import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange,}) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder} // here the placeholder is dynamic so that if anyone wants to another name !
    onChange={handleChange}
  />
);
