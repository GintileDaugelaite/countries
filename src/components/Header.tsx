import React from "react";

const Header = () => {
  return (
    <>
      <h1>List of countries</h1>

      <div className="btn-container">
        <button className="btn-container__sortAZ">A-Z</button>
        <button className="btn-container__sortAZ">Z-A</button>

        <button className="btn-container__sortOceania">Oceania</button>
        <button className="btn-container__sortLT">Smaller than LT</button>
      </div>
    </>
  );
};

export default Header;
