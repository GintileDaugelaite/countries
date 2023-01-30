import React, { useState, Dispatch, SetStateAction } from "react";
import CountryCard from "./CountryCard";

type CountryListArray = {
  name: string;
  region: string;
  area: string;
};

type HeaderProps = {
  countries: CountryListArray[];
  setCountries: Dispatch<SetStateAction<CountryListArray[]>>;
};

const Header = ({ countries, setCountries }: HeaderProps) => {
  const [isFilteredArea, setIsFilteredArea] = useState(false);
  const [isFilteredOceania, setIsFilteredOceania] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const sortByName = () => {
    setCountries(countries?.slice().sort((a, b) => (a > b ? 1 : -1)));
  };

  const filterArea = () => {
    setIsFilteredArea(!isFilteredArea);
    setCurrentPage(1);
  };

  const filterOceania = () => {
    setIsFilteredOceania(!isFilteredOceania);
    setCurrentPage(1);
  };

  let filteredCountries = countries;
  if (isFilteredArea) {
    filteredCountries = filteredCountries.filter(
      (country) => country.area < "65300.0"
    );
  }
  if (isFilteredOceania) {
    filteredCountries = filteredCountries.filter(
      (country) => country.region === "Oceania"
    );
  }

  const itemsPerPage = 17;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredCountries.length / itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <>
      <h1>List of countries</h1>

      <div className="btn-container">
        <button className="btn-container__sortAZ" onClick={sortByName}>
          Sort by name
        </button>
        <button className="btn-container__sortOceania" onClick={filterOceania}>
          {isFilteredOceania ? "Show All" : "By Oceania"}
        </button>
        <button className="btn-container__sortLT" onClick={filterArea}>
          {isFilteredArea ? "Show All" : "Smaller than LT"}
        </button>
      </div>

      <div className="countries">
        <ul className="countries__list">
          {countries &&
            currentCountries.map((country, i) => (
              <li className="countries__country" key={country.name}>
                {<CountryCard key={country.name} {...country} />}
              </li>
            ))}
        </ul>
        <div className="countries__pagination">
          {pageNumbers.map((number) => (
            <button
              className={
                currentPage === number
                  ? "countries__pagination-btn--current"
                  : "countries__pagination-btn"
              }
              key={number}
              onClick={() => {
                handlePageChange(number);
              }}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
