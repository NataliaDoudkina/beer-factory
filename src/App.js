import { useState, useEffect } from "react";
import "./App.css";
import BeerList from "./components/beer-list";
import SearchBox from "./components/searchbox";

function App() {

  // Some of the solutions might not be very efficient if the Api contained a lot more values and more complex structures.
  

  //initial array of beers
  const [beers, setBeers] = useState([]);
  //beers array after search
  const [beersSearched, setBeersSearched] = useState([]);

  const [message, setMessage]=useState("")
  useEffect(() => {
    
    fetch("https://api.punkapi.com/v2/beers")
      .then((result) => result.json())
      .then((data) => setBeers(data));
  }, []);

  const searchByName = (str) => {
    //search works regardless the case
    str = str.toLowerCase().trim();
    let names = [];
    names = beers.filter((beer) => beer.name.toLowerCase().includes(str));
    if(names.length===0){
      setMessage("no beer found")
    }
    else{
      setMessage("")
      setBeersSearched(names);
    }
   
  };
  return (
    <div class="container-fluid App">
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
        <BeerList message={message} beers={beers} beerSearched={beersSearched} />
      </div>
    </div>
  );
}

export default App;
