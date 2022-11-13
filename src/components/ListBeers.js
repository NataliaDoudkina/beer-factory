import Beer from "./Beer";
import styles from "../styles";

const ListBeers = (props) => {
 
    return (
        <>
            <p>
                <b>{props.message}</b>
            </p>
            <ul 
                    className="list-group" 
                    style={styles.BeerListStyle}
            >
                {props.searchedBeers.length > 0 ? props.searchedBeers.map((beer) => (
                    <li 
                            className=" pt-2" 
                            key={beer.id}
                    >
                        <Beer beer={beer} />
                    </li>
                    )) : (
                        props.beers.map((beer) => (
                            <li 
                                    className="pt-2" 
                                    key={beer.id}
                            >
                                <Beer beer={beer} />
                            </li>
                        ))
                    )
                }
            </ul>
        </>
    );
};

export default ListBeers;
