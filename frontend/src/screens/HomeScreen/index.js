import {useState, useEffect} from 'react';
import './styles.css';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/SearchButton';


function HomeScreen()
{

  /* This is example of how to fetch data from API */
  const [propertyData, setPropertyData] = useState(null);
  const [searchState, setSearchState] = useState('default');


  useEffect(() =>
  {
    async function fetchData()
    {
      // demo request to API (ensure it is running!)
      const resp = await fetch("/lrProperty/17401");
      const json = await resp.json();

      if(json.success)
        setPropertyData(json.lrProperty)
    }
    
    fetchData();
  }, []);
  /* end example */

  return (
    <div className="base-container">
      <div className="header-container">
        <h1 className="header-title">getTransaction()</h1>
      </div>
      <div className="search-container">
        <SearchBar />
        <Button setSearchState={setSearchState}/>
      </div>

    </div>
  );
}

export default HomeScreen;
