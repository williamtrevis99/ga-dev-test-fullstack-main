import {useState, useEffect} from 'react';
import './styles.css';
import SearchBar from '../../components/SearchBar';
import SearchButton from '../../components/SearchButton';


function SearchView(props)
{

  const [query, setQuery] = useState('');

  return (
    <>
      <SearchBar setQuery={setQuery} query={query}/>
      <SearchButton query={query} setPropertyData={props.setPropertyData} setView={props.setView}/>
    </>
  );
}

export default SearchView;
