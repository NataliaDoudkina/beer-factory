import Beer from "./Beer";
import styles from "../styles";

const BeerList = (props) => {
 
    return (
        <div>
            <p>
                <b>{props.message}</b>
            </p>
            <ul 
                    className="list-group" 
                    style={styles.BeerListStyle}
            >
                {props.searchedBeers.length > 0 ? props.searchedBeers.map((beer) => (
                    <li 
                            className=" pt-4" 
                            key={beer.id}
                    >
                        <Beer beer={beer} />
                    </li>
                    )) : (
                        props.beers.map((beer) => (
                            <li 
                                    className="pt-4" 
                                    key={beer.id}
                            >
                                <Beer beer={beer} />
                            </li>
                        ))
                    )
                }
            </ul>
        </div>
    );
};

export default BeerList;
