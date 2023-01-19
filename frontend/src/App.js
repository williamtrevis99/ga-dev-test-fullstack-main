import {useState} from 'react';

import BackButton from './components/BackButton/index';

import SearchView from './views/SearchView'
import ResultsView from './views/ResultsView';


function App()
{

  const [view, setView] = useState('SearchView');
  const [propertyData, setPropertyData] = useState(0);

  return (
    <div className="base-container">
      
      <div className="header-container">

        { view === 'ResultsView' ? 
            <BackButton setView={setView}/> : null 
        }

      </div>
      
      <div className="secondary-container">
      
        { view === 'SearchView' ? 
          <SearchView setView={setView} setPropertyData={setPropertyData}/> : 
          <ResultsView propertyData={propertyData} /> 
        }

      </div>
    </div>
  );
}

export default App;
