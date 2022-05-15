import { useContext } from "react";
import CountryDataContext from "../context/countryDataContext";

function CountryCard() {
  const { info, isLoading } = useContext(CountryDataContext);
  return (
    <div className="card-container">
      {isLoading ? (
        <p>Searching...</p>
      ) : (
        info.map((item) => (
          <div className="card" key={item.numericCode}>
            <div className="country-flag">
              <img src={item.flag} alt="country flag" />
            </div>
            <div className="country-info">
              <h2>{item.name}</h2>
              <p>
                <b>Population:</b> {item.population}
              </p>
              <p>
                <b>Region:</b> {item.region}
              </p>
              <p>
                <b>Capital:</b> {item.capital}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default CountryCard;
