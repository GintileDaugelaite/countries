import React from "react";

const CountryCard = () => {
    return(
        <div className="country-card">
        <h3 className="country-card__name">{}</h3>
        <h4 className="country-card__region">Region: {}</h4>
        <h5 className="country-card__area">Area: {}</h5>
    </div>
    )
}

export default CountryCard;