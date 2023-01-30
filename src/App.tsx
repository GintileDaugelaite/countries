import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";
import axios from "axios";
import "./App.scss";

type CountryListArray = {
  name: string;
  region: string;
  area: string;
};

const App: React.FC = () => {
  const [countries, setCountries] = useState<CountryListArray[]>([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="wrapper">
      <Countries countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default App;
