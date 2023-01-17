import {useState, useEffect} from 'react';
import './styles.css';


function HomeScreen()
{

  /* This is example of how to fetch data from API */
  const [propertyData, setPropertyData] = useState(null);

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
    <div className="App">
      {propertyData ? <strong>{propertyData.street}</strong> : null}

    </div>
  );
}

export default HomeScreen;
