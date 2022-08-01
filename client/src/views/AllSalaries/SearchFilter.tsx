import { useRecoilState } from "recoil";
import { filterState, searchParamState } from "../../recoil/atoms";

const SearchFilter = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  const [, setSearchParam] = useRecoilState(searchParamState);

  const filterSalaries = (e: { target: { value: string } }) => {
    setSearchParam(e.target.value.toLowerCase());
  };

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
          <option value="">Select criterion</option>
          <option value="sector">Sector</option>
          <option value="jobTitle">Job title</option>
          <option value="company">Company</option>
          <option value="city">City</option>
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
