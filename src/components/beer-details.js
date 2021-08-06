import React, { useEffect, useState } from "react";
import "../beer.css";
import styles from "../styles";

const BeerDetails = ({ beer, clickBtnHideDetails }) => {
  const [ingredientsNames, setIngredientsNames] = useState([]);

  const modifiedContributedBy = (str) => {
    //remove <samjbmason> from the value of contributed_by
    str = beer.contributed_by;
    let arr = str.split(" ");
    arr.pop();
    str = arr.join(" ");
    return str;
  };

  useEffect(() => {
    //get Ingredients from the beer object and display them (names only)

    let names = [];
    names = Object.keys(beer.ingredients);
    setIngredientsNames(names);
  }, [beer.ingredients]);

  const handleClick = () => {
    clickBtnHideDetails();
  };

  return (
    <div>
      <button onClick={handleClick} style={styles.Btn}>
        Hide details
      </button>
      <ul class="list-group" style={{ listStyle: "disc" }}>
        <li class="list-group-item border-0 p-0">
          <span>boil_volume:&nbsp;</span>
          {beer.boil_volume.value}&nbsp;
          {beer.boil_volume.unit}
        </li>
        <li class="list-group-item border-0 p-0">
          <span>brewers_tips: </span>
          {beer.brewers_tips}
        </li>
        <li class="list-group-item border-0 p-0">
          <span>contributed_by:&nbsp;</span>
          {modifiedContributedBy(beer.contributed_by)}
        </li>
        <li class="list-group-item border-0 p-0">
          <span>description:&nbsp;</span>
          {beer.description}
        </li>
        <li class="list-group-item border-0 p-0">
          <span>first_brewed:&nbsp;</span>
          {beer.first_brewed}
        </li>
        <li class="list-group-item border-0 p-0">
          <span>food_pairing:&nbsp;</span>

          <ul>
            {beer.food_pairing.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </li>
        <li class="list-group-item border-0 p-0">
          <span>ingredients:&nbsp;</span>
          {ingredientsNames.map((name) => (
            <ul>
              {" "}
              <li class="p-0">{name}:</li>
              <ul>
                {beer.ingredients[name] instanceof Array ? (
                  beer.ingredients[name].map((el) => (
                    <li class="p-0">{el["name"]}</li>
                  ))
                ) : (
                  <li class="p-0">
                    {name} : {beer.ingredients[name]}
                  </li>
                )}
              </ul>
            </ul>
          ))}
        </li>
        <li class="list-group-item border-0 p-0">
          <span>tagline:&nbsp;</span>
          {beer.tagline}
        </li>
        <li class="list-group-item border-0 p-0">
          <span>volume:&nbsp;</span>
          {beer.volume.value}&nbsp;
          {beer.volume.unit}
        </li>
      </ul>
    </div>
  );
};

export default BeerDetails;
