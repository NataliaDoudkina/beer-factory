import "../beer.css";

import {
    useEffect,
    useState
} from "react";

import styles from "../styles";

const BeerDetails = ({ beer, clickBtnHideDetails }) => {
    
    const [ingredientsNames, setIngredientsNames] = useState([]);

    const formatContributedBy = (str) => {
        str = beer.contributed_by;
        let arr = str.split(" ");
        arr.pop();
        str = arr.join(" ");
        return str;
    };

    useEffect(() => {
        let ingredientNames = [];
        ingredientNames = Object.keys(beer.ingredients);
        setIngredientsNames(ingredientNames);
    }, [beer.ingredients]);

    const handleClick = () => {
        clickBtnHideDetails();
    };

    return (
        <div>
            <button 
                    onClick={handleClick} 
                    style={styles.Btn}
            >
                Hide details
            </button>
            <ul 
                    class="list-group" 
                    style={{ listStyle: "disc" }}
            >
                <li class="list-group-item border-0 p-0">
                    <span>
                        boil_volume:&nbsp;
                    </span>
                    {beer.boil_volume.value}&nbsp;
                    {beer.boil_volume.unit}
                </li>
                <li class="list-group-item border-0 p-0">
                    <span>
                        brewers_tips: 
                    </span>
                    {beer.brewers_tips}
                </li>
                <li class="list-group-item border-0 p-0">
                    <span>
                        contributed_by:&nbsp;
                    </span>
                    {formatContributedBy(beer.contributed_by)}
                </li>
                <li class="list-group-item border-0 p-0">
                    <span>
                        description:&nbsp;
                    </span>
                    {beer.description}
                </li>
                <li class="list-group-item border-0 p-0">
                    <span>first_brewed:&nbsp;
                    </span>
                    {beer.first_brewed}
                </li>
                <li class="list-group-item border-0 p-0">
                    <span>
                        food_pairing:&nbsp;
                    </span>
                    <ul>
                        {beer.food_pairing.map((item) => (
                            <li>
                                {item}
                            </li>
                            ))
                        }
                    </ul>
                </li>
                <li class="list-group-item border-0 p-0">
                    <span>
                        ingredients:&nbsp;
                    </span>
                    {ingredientsNames.map((ingredient) => (
                        <ul>
                        {" "}
                            <li class="p-0">
                                {ingredient}:
                            </li>
                            <ul>
                                {beer.ingredients[ingredient] instanceof Array ? (
                                beer.ingredients[ingredient].map((item) => (
                                    <li class="p-0">{item["name"]}</li>
                                ))
                                ) : (
                                    <li class="p-0">
                                        {ingredient} : {beer.ingredients[ingredient]}
                                    </li>
                                )}
                            </ul>
                        </ul>
                    ))}
                </li>
                <li class="list-group-item border-0 p-0">
                    <span>
                        tagline:&nbsp;
                    </span>
                    {beer.tagline}
                </li>
                <li class="list-group-item border-0 p-0">
                    <span>
                        volume:&nbsp;
                    </span>
                    {beer.volume.value}&nbsp;
                    {beer.volume.unit}
                </li>
            </ul>
        </div>
    );
};

export default BeerDetails;
