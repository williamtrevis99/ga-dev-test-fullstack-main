import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


function App()
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {propertyData ? <strong>{propertyData.street}</strong> : null}
      </header>
    </div>
  );
}

export default App;
