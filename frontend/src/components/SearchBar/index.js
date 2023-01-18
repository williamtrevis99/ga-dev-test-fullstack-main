import {useState, useEffect} from 'react';
import './styles.css';


function SearchBar() {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log('Search')
        }
    }


    return (
        <input
            className="search-bar"
            type="text"
            placeholder="Enter a property ID, postcode or a street"
            onChange={handleChange}
            defaultValue={searchInput}
            value={searchInput} 
            onKeyDown={handleKeyDown}
            />
    )

}


export default SearchBar;