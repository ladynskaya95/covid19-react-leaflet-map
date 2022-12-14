import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import CovidMap from "./CovidMap";
import Legend from "./Legend";
import legendItems from "../entities/LegendItems";

import LoadCountriesTask from "../tasks/LoadCountriesTask";

const Covid19 = () => {
    const [countries, setCountries] = useState([]);

    const legendItemsReverse = [...legendItems].reverse();

     const load = () => {

       const loadCountriesTask = new LoadCountriesTask();
       loadCountriesTask.load((countries) => setCountries(countries));
     };

     useEffect(load, []);
     

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <div className="title">В паралельному всесвіті, де коронавірус існує...</div>
          <CovidMap countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Covid19;
