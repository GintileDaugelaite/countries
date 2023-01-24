import React, { useState } from "react";
import CountryCard from "./CountryCard";

type CountryListArray = {
  name: string;
  region: string;
  area: string;
};

type CountryListProps = {
  countries: CountryListArray[];
};

const CountryList = ({ countries }: CountryListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 17;
  const totalPages = Math.ceil(countries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = countries.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page > totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="countries">
        <ul className="countries__list">
          {countries &&
            paginatedData.map((country, i) => (
              <li className="countries__country" key={country.name}>
                {<CountryCard key={country.name} {...country} />}
              </li>
            ))}
        </ul>
        <div className="countries__pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              className="countries__pagination--btn"
              key={i}
              onClick={() => {
                handlePageChange(i + 1);
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CountryList;
