import Beer from "./individual-beer";
import styles from "../styles";

const BeerList = ({message, beers, beerSearched }) => {
 
    return (
        <div>
            <p>
                <b>{message}</b>
            </p>
            <ul 
                    className="list-group" 
                    style={styles.BeerListStyle}
            >
                {beerSearched.length > 0
                ? beerSearched.map((beer) => (
                    <li className=" pt-4" key={beer.id}>
                        <Beer beer={beer} />
                    </li>
                    )) : (
                        beers.map((beer) => (
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
