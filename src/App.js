import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountryInfo from "./components/CountryInfo";
import "./sass/App.sass";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countryinfo" element={<CountryInfo />} />
    </Routes>
  );
}

export default App;
