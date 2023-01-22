import React from "react";


type CountryCardProps = {
    name: string;
    region: string;
    area: string;
    independent: boolean;
  };


const CountryCard = ({name, region, area, independent}: CountryCardProps  ) => {
    return(
        <div className="country-card">
        <h3 className="country-card__name">{name}</h3>
        <span className="country-card__region">Region: {region}</span>
        <span className="country-card__area">{area ? `Area: ${area}` : "" }</span>
    </div>
    )
    // padaryt prie area, kad jeigu nera, tai isvis to div'o nebutu
}

export default CountryCard;