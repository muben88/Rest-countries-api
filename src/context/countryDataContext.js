import { createContext, useState, useEffect } from "react";

const CountryDataContext = createContext();

export const CountryDataProvider = ({ children }) => {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountries = async () => {
    const res = await fetch("https://restcountries.com/v2/all");
    const data = await res.json();
    setInfo(data);
    setIsLoading(false);
  };

  const searchCountries = async (query) => {
    setIsLoading(true);
    const res = await fetch(`https://restcountries.com/v2/name/${query}`);
    const data = await res.json();
    setInfo(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <CountryDataContext.Provider value={{ info, isLoading, searchCountries }}>
      {children}
    </CountryDataContext.Provider>
  );
};

export default CountryDataContext;
