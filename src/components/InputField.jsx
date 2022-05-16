import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import CountryDataContext from "../context/countryDataContext";

function InputField() {
  const [searchText, setSearchText] = useState("");

  const { searchCountries } = useContext(CountryDataContext);

  const changeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const submitHandler = (e) => {
    if (searchText <= 0) {
      alert("enter");
    }
    searchCountries(searchText);
    setSearchText("");
  };

  return (
    <div className="search-filter">
      <div className="input-field">
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={changeHandler}
          value={searchText}
        />
        <BsSearch className="search-icon" onClick={submitHandler} />
      </div>
      <div className="region-filter">
        <details>
          <summary>Filter by Region</summary>
          <ul className="region-list">
            <li value="Africa">Africa</li>
            <li value="America">America</li>
            <li value="Asia">Asia</li>
            <li value="Europe">Europe</li>
            <li value="Oceania">Oceania</li>
          </ul>
        </details>
      </div>
    </div>
  );
}
export default InputField;
