import Header from "./components/Header";
import InputField from "./components/InputField";
import CountryCard from "./components/CountryCard";
import "./sass/App.sass";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <InputField />
        <CountryCard />
      </div>
    </>
  );
}

export default App;
