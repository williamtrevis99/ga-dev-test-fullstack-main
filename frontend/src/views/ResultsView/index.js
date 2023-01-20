import PropertyItem from '../../components/PropertyItem';
import './styles.css';
import FlatList from 'flatlist-react';



function ResultsView(props)
{

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
            renderWhenEmpty={() => <div>No Propeties Found</div>}
            />
    </div>
     
  );
}

export default ResultsView;