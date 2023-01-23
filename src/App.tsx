import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CountryList from "./components/CountryList";
import axios from "axios";
import "./App.scss";

type CountryListArray = {
  name: string;
  region: string;
  area: string;
};

const App: React.FC = () => {
  const [countries, setCountries] = useState<CountryListArray[]>([]);
  const [originalCountries, setOriginalCountries] = useState<
    CountryListArray[]
  >([]);



  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => {
        setCountries(res.data);
        setOriginalCountries(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="wrapper">
      <Header countries={countries} setCountries={setCountries} originalCountries={originalCountries}  />
      <CountryList countries={countries}/>
    </div>
  );
};

export default App;
