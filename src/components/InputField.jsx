import { BsSearch } from "react-icons/bs";

function InputField() {
  return (
    <>
      <div className="input-field">
        <input type="text" placeholder="Search for a country..." />
        <BsSearch className="search-icon" />
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
    </>
  );
}
export default InputField;
