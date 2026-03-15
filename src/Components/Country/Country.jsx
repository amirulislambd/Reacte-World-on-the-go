import { useState } from "react";
import "./Country.css";
const Country = ({ country,handleVisitedCountries,handleVisitedFlags }) => {
  // console.log(country);
  // console.log(handleVisitedCountries)
  const [visited, setVisited] = useState(false);
  const handleClick = () => {
    // 1. basic system
    // if(visited){
    //   setVisited(false)
    // }else{
    //   setVisited(true)
    // }
    // 2. second system
    // setVisited(visited ? false : true);
    // 3. third system
    setVisited(!visited)
    handleVisitedCountries(country)
  };

  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleClick}>
        {visited ? "visited" : "Not Visited"}
      </button>
      <button onClick={()=>handleVisitedFlags(country?.flags?.flags?.png)}>Visited Flag</button>
    </div>
  );
};

export default Country;
