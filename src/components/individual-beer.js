import BeerDetails from "./beer-details";
import styles from "../styles";
import { useState } from "react";

const Beer = ({ beer }) => {
    const [padding, setPadding] = useState("10%");
    const [isButtonDisplayed, setIsButtonDisplayed] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [imgColClass, setImgColClass] = useState("col-sm-2 d-flex");
    const [details, setDetails] = useState("col-sm-9 offset-sm-1");

    const titleAndTaglineStyle = {
        paddingTop: padding,
        textAlign: "start",
        paddingLeft: "3%",
    };

    const handleHover = () => {
        setPadding("5%");
        if (isButtonClicked) {
            setIsButtonDisplayed(false);
        } else {
            setIsButtonDisplayed(true);
        }
    };

    const displayBeerDetails = () => {
        setIsButtonClicked(() => true);
        setImgColClass("col-sm-3 d-flex");
        setDetails("col-sm-8 offset-sm-1");
        setIsButtonDisplayed(false);
    };

    const hideBeerDetails = () => {
        setIsButtonDisplayed(true);
        setIsButtonClicked(false);
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
                <div 
                        className={details} 
                        style={titleAndTaglineStyle}
                >
                    <h1>
                        <b>{beer.name}</b>
                    </h1>
                    <p>
                        <b>{beer.tagline}</b>
                    </p>
                    {isButtonDisplayed ? (
                        <button 
                                style={styles.Btn} 
                                onClick={displayBeerDetails}
                        >
                            Show details
                        </button>
                    ) : (
                        ""
                    )}
                    {isButtonClicked ? (
                        <div className="col">
                            <BeerDetails
                                    beer={beer}
                                    clickBtnHideDetails={hideBeerDetails}
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
