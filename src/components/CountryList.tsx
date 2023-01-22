import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";


type CountryListArray = {
    name: string;
    region: string;
    area: string;
    independent: boolean;
  };
  

const CountryList: React.FC = () => {


    const [countries, setCountries] = useState<CountryListArray[]>([]);

    useEffect(() => {

        axios.get<CountryListArray[]>('https://restcountries.com/v2/all?fields=name,region,area')
            .then(res => setCountries(res.data));
    }, [])

    return(

        <>
            <div className="countries">
                <ul className="countries__list">
                {
                            countries && countries.map((country, index) => <li className="countries__country">{<CountryCard key={country.name} {...country} />}</li>)
                }
                </ul>
            </div>

    </>
    )
}

export default CountryList;