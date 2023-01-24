import React, { Dispatch, SetStateAction } from "react";

type CountryListArray = {
  name: string;
  region: string;
  area: string;
};

type HeaderProps = {
  countries: CountryListArray[];
  setCountries: Dispatch<SetStateAction<CountryListArray[]>>;
  originalCountries: CountryListArray[];
};

const Header = ({
  countries,
  setCountries,
  originalCountries,
}: HeaderProps) => {

  const sortByName = () => {
    setCountries(countries?.slice().sort((a, b) => (a > b ? 1 : -1)));
  };

  const filterOceania = () => {
    setCountries(countries?.filter((country) => country.region === "Oceania"));
  };

  const filterArea = () => {
    setCountries(countries?.filter((country) => country.area < "65300.0"));
  };

  const resetBtn = () => {
    setCountries(originalCountries);
  };

  return (
    <>
      <h1>List of countries</h1>

      <div className="btn-container">
        <button className="btn-container__sortAZ" onClick={sortByName}>
          Sort by name
        </button>
        <button className="btn-container__sortOceania" onClick={filterOceania}>
          Oceania
        </button>
        <button className="btn-container__sortLT" onClick={filterArea}>
          Smaller than LT
        </button>
        <button className="btn-container__reset" onClick={resetBtn}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Header;
