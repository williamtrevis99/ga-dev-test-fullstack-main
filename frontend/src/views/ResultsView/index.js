import PropertyItem from '../../components/PropertyItem';
import './styles.css';
import FlatList from 'flatlist-react';

function ResultsView(props)
{

  const renderProperty = (propertyData, idx) => {
    return (
      <PropertyItem propertyData={propertyData}/>
    );
  }
 
  return (
    <div className="results-container">
        <p className='title'>Transactions</p>

        <FlatList
            list={props.propertyData}
            renderItem={renderProperty}
            />
    </div>
     
  );
}

export default ResultsView;