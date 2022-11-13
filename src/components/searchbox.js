const SearchBox = ({ searchByName }) => {
    
    return (
        <div className="container">
        <input
                type="search"
                className="form-control"
                onChange={(e) => searchByName(e.target.value)}
                placeholder="Search for beer..."
        />
        </div>
    );
};

export default SearchBox;
