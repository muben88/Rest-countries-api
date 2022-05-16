import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import CountryDataContext from "../context/countryDataContext";
import Header from "./Header";

function CountryInfo() {
  const { countryInfo, isLoading, fetchCountries } =
    useContext(CountryDataContext);

  return (
    <>
      <Header />
      {!isLoading && countryInfo[0] ? (
        <div className="country-info">
          <div className="back-home" onClick={() => fetchCountries()}>
            <Link className="button" to="/">
              <BsArrowLeft className="arrow-icon" />
              Back
            </Link>
          </div>
          <div className="country-info-content">
            <div className="country-info-flag">
              <img src={countryInfo[0].flag} alt="belg" />
            </div>
            <div className="infos">
              <h2>{countryInfo[0].name}</h2>
              <div className="item1">
                <p>
                  <b>Native Name:</b>{" "}
                  {countryInfo[0].nativeName
                    ? countryInfo[0].nativeName
                    : "unknown"}
                </p>
                <p>
                  <b>Population:</b>{" "}
                  {countryInfo[0].population
                    ? countryInfo[0].population.toLocaleString()
                    : "unknown"}
                </p>
                <p>
                  <b>Region:</b>
                  {countryInfo[0].region ? countryInfo[0].region : "not found"}
                </p>
                <p>
                  <b>Sub Region:</b>
                  {countryInfo[0].subregion
                    ? countryInfo[0].subregion
                    : "not found"}
                </p>
                <p>
                  <b>Capital:</b>
                  {countryInfo[0].capital
                    ? countryInfo[0].capital
                    : "not found"}
                </p>
              </div>
              <div className="item2">
                <p>
                  <b>Top Level Domain:</b>
                  {countryInfo[0].topLevelDomain
                    ? countryInfo[0].topLevelDomain[0]
                    : "not found"}
                </p>
                <p>
                  <b>Currencies:</b>
                  {countryInfo[0].currencies
                    ? countryInfo[0].currencies[0].name
                    : "not found"}
                </p>
                <p>
                  <b>Languages:</b>
                  {countryInfo[0].languages ? (
                    countryInfo[0].languages.map((lang) => (
                      <span key={lang.name}>{lang.name}, </span>
                    ))
                  ) : (
                    <span>None</span>
                  )}
                </p>
              </div>
              <div className="border-countries">
                <p>
                  <b>Border Countries: </b>
                </p>
                <div>
                  {countryInfo[0].borders ? (
                    countryInfo[0].borders.map((border) => (
                      <p key={border}>{border}</p>
                    ))
                  ) : (
                    <p>No border countries</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="country-info">
          <p className="error-msg">error occured! Please back to home</p>
          <div className="back-home" onClick={() => fetchCountries()}>
            <Link className="button" to="/">
              <BsArrowLeft className="arrow-icon" />
              Back
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
export default CountryInfo;
