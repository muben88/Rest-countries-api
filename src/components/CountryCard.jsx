import { useContext } from "react";
import { Link } from "react-router-dom";
import CountryDataContext from "../context/countryDataContext";

function CountryCard() {
  const { info, isLoading, getCountryInfo } = useContext(CountryDataContext);
  return (
    <div className="card-container">
      {isLoading ? (
        <p>Searching...</p>
      ) : info.length > 0 ? (
        info.map((item) => (
          <div className="card" key={item.name}>
            <Link to="/countryinfo">
              <div
                className="country-flag"
                onClick={() => getCountryInfo(item.name)}
              >
                <img src={item.flag} alt="country flag" />
              </div>
            </Link>

            <div className="country-info">
              <h2>{item.name}</h2>
              <p>
                <b>Population:</b> {item.population.toLocaleString()}
              </p>
              <p>
                <b>Region:</b> {item.region ? item.region : "unknown"}
              </p>
              <p>
                <b>Capital:</b> {item.capital ? item.capital : "unknown"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="error-msg">
          Nothing found! Please enter a different country name
        </p>
      )}
    </div>
  );
}
export default CountryCard;
