import { features } from "../data/countries.json";

class LoadCountriesTask {
  covidUrl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

  load = (setState) => {
    setState(features);
    console.log(features);
  };
};

export default LoadCountriesTask;
