import PropertyItem from '../../components/PropertyItem';
import './styles.css';



function ResultsView(props)
{
 
  return (
    <div className="results-container">
        <p className='title'>Transactions</p>
        <PropertyItem propertyData={props.propertyData}/>
    </div>
     
  );
}

export default ResultsView;