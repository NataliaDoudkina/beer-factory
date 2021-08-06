import React, { useState } from "react";
import BeerDetails from "./beer-details";
import styles from "../styles";

const Beer = ({ beer }) => {
  const [padding, setPadding] = useState("10%");
  const [btnIsShown, setBtnIsShown] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [imgColClass, setImgColClass] = useState("col-sm-2 d-flex");
  const [details, setDetails] = useState("col-sm-9 offset-sm-1");

  const titleAndTaglineStyle = {
    paddingTop: padding,
    textAlign: "start",
    paddingLeft: "3%",
  };

  const handleHover = () => {
    setPadding("5%");

    if (clicked) {
      setBtnIsShown(false);
    } else {
      setBtnIsShown(true);
    }
  };

  const clickBtnShowDetails = () => {
    //changed the  size of the elements by changing their bootstrap 5 classes
    setClicked(() => true);
    setImgColClass("col-sm-3 d-flex");
    setDetails("col-sm-8 offset-sm-1");
    setBtnIsShown(false);
  };

  const clickBtnHideDetails = () => {
    setBtnIsShown(true);
    setClicked(false);
    setImgColClass("col-sm-2 d-flex");
    setDetails("col-sm-9 offset-sm-1");
  };

  return (
    <div
      className="row m-5"
      style={styles.BeerCardStyle}
      onMouseEnter={handleHover}
    >
      <div className="row  pt-4 pb-2">
        <div className={imgColClass}>
          <img
            src={beer.image_url}
            className="img-fluid"
            alt={`bottle of beer ${beer.name}`}
          />
        </div>
        <div className={details} style={titleAndTaglineStyle}>
          <h1>
            <b>{beer.name}</b>
          </h1>

          <p>
            <b>{beer.tagline}</b>
          </p>
          {btnIsShown ? (
            <button style={styles.Btn} onClick={clickBtnShowDetails}>
              Show details
            </button>
          ) : (
            ""
          )}
          {clicked ? (
            <div className="col">
              <BeerDetails
                beer={beer}
                clickBtnHideDetails={clickBtnHideDetails}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Beer;
