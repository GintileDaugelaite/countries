import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const CountryList = () => {

    const [countries, setCountries] = useState(null);

    useEffect(() => {

        axios.get('https://restcountries.com/v2/all?fields=name,region,area')
            .then(res => setCountries(res.data));
    }, [])

    return(

        <>
            <div className="countries-list">
                <ul>
la
                </ul>
            </div>

    </>
    )
}

export default CountryList;