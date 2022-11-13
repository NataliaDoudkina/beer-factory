import BeerDetails from "./beer-details";
import styles from "../styles";
import { useState } from "react";

const Beer = ({ beer }) => {
    
    const [isButtonDisplayed, setIsButtonDisplayed] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [containerHeight, ssetContainerHeight] = useState("20rem");
    

    const handleHover = () => {
        if (isButtonClicked) {
            setIsButtonDisplayed(false);
        } else {
            setIsButtonDisplayed(true);
        }
    };

    const displayBeerDetails = () => {
        setIsButtonClicked(() => true);
        setIsButtonDisplayed(false);
        ssetContainerHeight("auto");
    };

    const hideBeerDetails = () => {
        setIsButtonDisplayed(true);
        setIsButtonClicked(false);;
    };

    return (
        <div
                className="row m-5"
                onMouseEnter={handleHover}
        >
            <div className="row  pt-4 pb-2">
                <div 
                        className="card" 
                        style={{width: "100%", height: `${containerHeight}`, flexDirection: "row"}}
                >
                    <img 
                            src={beer.image_url}  
                            alt={`bottle of beer ${beer.name}`} 
                            height={"auto"} 
                            width={"30%"} 
                            style={{objectFit: "contain", paddingTop: "2rem", paddingBottom: "2rem"}} 
                    />
                    <div className="card-body">
                        <h4 className="card-title">
                            {beer.name}
                        </h4>
                        <h5>{beer.tagline}</h5>
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
                {/*<div className={imgColClass}>
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
                    </div> */}
            </div>
        </div>
    );
};

export default Beer;
