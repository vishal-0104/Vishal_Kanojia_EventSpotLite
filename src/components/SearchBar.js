import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search by name or location"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
