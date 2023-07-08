import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../Api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderRadius: '15px',
        border: '2px solid #3a86ff',
        boxShadow: state.isFocused ? '0 0 10px 2px #f1faee' : null,
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#3699FF' : null,
        color: state.isFocused ? 'white' : null,
        borderRadius: '15px',

    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: '#3a86ff', // Placeholder color
    }),
}
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="w-[50%] " >
    <AsyncPaginate
      styles={customStyles}
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
    </div>
  );
};

export default Search;