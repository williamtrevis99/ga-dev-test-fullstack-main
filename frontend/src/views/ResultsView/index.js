import PropertyItem from '../../components/PropertyItem';
import FlatList from 'flatlist-react';
import './styles.css';


function ResultsView(props) {

  const renderProperty = (property, idx) => {
    return (
      <PropertyItem property={property} key={idx}/>
    );
  }
 
  return (
    <div className="results-container">
        <p className='title'>Transactions</p>
        <FlatList
            list={props.propertyData}
            renderItem={renderProperty}
            renderWhenEmpty={() => <div class="no-properties">No Propeties Found</div>}
            />
    </div>
     
  );
}

export default ResultsView;