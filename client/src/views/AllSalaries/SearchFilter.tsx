import React from "react";

interface FilterProps {
  filter: string;
  setFilter: (value: string) => void;
  filterSalaries: (e: { target: { value: string } }) => void;
}

const SearchFilter = ({ filter, setFilter, filterSalaries }: FilterProps) => {
  return (
    <div className="filter-box">
      <div>
        <label htmlFor="filter">Filter by </label>

        <select
          name="filter"
          id="filter"
          onChange={({ target }) => {
            setFilter(target.value);
          }}
        >
          <option value="">select criterion</option>
          <option value="jobTitle">job title</option>
          <option value="company">company</option>
          <option value="city">city</option>
        </select>
      </div>
      <input
        type="text"
        className="searchBar"
        placeholder={`Enter search value`}
        onChange={filterSalaries}
        disabled={filter ? false : true}
      />
    </div>
  );
};

export default SearchFilter;
