import React from "react";

type CountryCardProps = {
  name: string;
  region: string;
  area: string;
};

const CountryCard = ({ name, region, area }: CountryCardProps) => {
  return (
    <div className="country-card">
      <h3 className="country-card__name">{name}</h3>
      <span className="country-card__region">Region: {region}</span>
      <span className="country-card__area">Area: {area ? area : "Not provided"}</span>
    </div>
  );
};

export default CountryCard;
