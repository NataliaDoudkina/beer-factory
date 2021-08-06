import React from "react";
import Beer from "./individual-beer";
import styles from "../styles";

const BeerList = ({message, beers, beerSearched }) => {
   
 
  return (
    <div>
   
    {message}
      <ul class="list-group" style={styles.BeerListStyle}>
        {beerSearched.length > 0
          ? beerSearched.map((beer) => (
              <li class=" pt-4">
                <Beer beer={beer} key={beer.id + beer.name} />
              </li>
            ))
          : beers.map((beer) => (
              <li class="pt-4">
                <Beer beer={beer} key={beer.id + beer.name} />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default BeerList;
