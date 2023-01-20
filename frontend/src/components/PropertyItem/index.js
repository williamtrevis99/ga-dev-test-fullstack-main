import './styles.css';
import TransactionItem from '../TransactionItem'
import FlatList from 'flatlist-react';


const renderTransaction = (transaction, idx) => {
    return (
       <TransactionItem transaction={transaction} key={idx} />
    );
}


function PropertyItem(props) {

    const property = props.propertyData
    return (
        <>
            <p className='property-data'>{ property.outcode }{ property.incode }, { property.paon}, { property.saon} , { property.street}</p>
            
            <FlatList
            list={props.propertyData.lrTransactions}
            renderItem={renderTransaction}
            renderWhenEmpty={() => <div>List is empty!</div>}
            />
        </>
    )

}
export default PropertyItem;