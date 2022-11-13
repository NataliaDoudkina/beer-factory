import "./App.css";

import {
    useEffect,
    useState
} from "react";

import BeerList from "./components/beer-list";
import SearchBox from "./components/searchbox";

const App = () => {
    const [beers, setBeers] = useState([]);
    const [searchedBeers, setBeersSearched] = useState([]);
    const [message, setMessage] = useState("");
  
    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers")
        .then((result) => result.json())
        .then((data) => setBeers(data));
    }, []);

    const searchByName = (str) => {
        str = str.toLowerCase().trim();
        let names = [];
        names = beers.filter((beer) => beer.name.toLowerCase().includes(str));
        if (names.length === 0) {
            setMessage("no beers found");
            setBeersSearched(beers);
        } else {
            setMessage("");
            setBeersSearched(names);
        }
    };
    return (
        <div className="container-fluid App">
            <header>
                <h1>
                    <b>Beer Factory</b>
                </h1>
            </header>
            <div className="row justify-content-md-center ">
                <div className="row">
                    <div className="col">
                        <SearchBox searchByName={searchByName} />
                    </div>
                </div>
            </div>
            <div className="col-sm-12 pt-5 ">
                <BeerList
                        message={message}
                        beers={beers}
                        searchedBeers={searchedBeers}
                />
            </div>
        </div>
    );
}

export default App;
