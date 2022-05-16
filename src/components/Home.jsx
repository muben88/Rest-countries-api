import Header from "./Header";
import InputField from "./InputField";
import CountryCard from "./CountryCard";

function Home() {
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
export default Home;
