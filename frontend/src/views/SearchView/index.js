import {useState, useEffect} from 'react';
import './styles.css';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/SearchButton';


function SearchView()
{

  const [propertyData, setPropertyData] = useState(0);
  const [searchState, setSearchState] = useState('default');
  const [query, setQuery] = useState('');

  return (
    <>
     <SearchBar setQuery={setQuery} query={query}/>
        <Button setSearchState={setSearchState} query={query} setPropertyData={setPropertyData}/>
        <p>{propertyData}</p>
    </>
  );
}

export default SearchView;
