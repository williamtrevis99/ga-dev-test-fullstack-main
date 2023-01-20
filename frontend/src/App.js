import {useState} from 'react';

import BackButton from './components/BackButton/index';
import SearchView from './views/SearchView'
import LoadingView from './views/LoadingView';
import ResultsView from './views/ResultsView';


function App() {

  const [view, setView] = useState('SearchView');
  const [propertyData, setPropertyData] = useState(0);

  // Render SEARCH, LOADING or RESULTS view
  let renderView = () => {
    if(view === 'SearchView') {
        return <SearchView setView={setView} setPropertyData={setPropertyData}/>
    } else if (view === 'LoadingView') {
        return <LoadingView />
    } else if (view ==='ResultsView') {
        return <ResultsView propertyData={propertyData} />
    } else {
        return <div></div>
    }
  }

  return (
    <div className="base-container">
      <div className="header-container">
        { view === 'ResultsView' ? 
            <BackButton setView={setView} setPropertyData={setPropertyData}/> : null 
        }
      </div>
      <div className="secondary-container">{renderView()}</div>
    </div>
  );
}

export default App;
