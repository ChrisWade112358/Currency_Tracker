import React, { useState, useEffect } from 'react';
import Loading from './Loading/Loading';
import CurrencyMap from './CurrencyMap';
import LoadCountriesTask from '../tasks/LoadCountriesTask';

const WorldCurrencies = ({data}) => {
    console.log(data)
    const [countries, setCountries] = useState([]);

    const load = () => {
        const loadCountriesTask = new LoadCountriesTask();
        loadCountriesTask.load(setCountries);
    };

    useEffect(load,);

    return( 
        <div>
            {countries.length === 0 ? (
                <Loading />
                ) : (
                <div>
                    <CurrencyMap countries={countries}/>
                </div>
            )} 
    </div>
    );
};

export default WorldCurrencies;