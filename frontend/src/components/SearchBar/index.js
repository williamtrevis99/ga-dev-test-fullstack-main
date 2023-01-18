import {useState, useEffect} from 'react';
import './styles.css';


function SearchBar(props) {


    const handleChange = (e) => {
        e.preventDefault();
        props.setQuery(e.target.value);
      };


    return (
        <input
            className="search-bar"
            type="text"
            placeholder="Enter a property ID, postcode or a street.."
            onChange={handleChange}
            defaultValue={props.query}
            value={props.query} 
            />
    )

}


export default SearchBar;