import './styles.css';
import TransactionItem from '../TransactionItem'
import FlatList from 'flatlist-react';


const renderTransaction = (transaction, idx) => {
    return (
       <TransactionItem transaction={transaction} key={idx} />
    );
}

function PropertyItem(props) {

    const property = props.property
    return (
        <>
            <p className='property-data'>{ property.outcode }{ property.incode }, { property.paon}, { property.saon} , { property.street}</p>
            
            <FlatList
            list={property.lrTransactions}
            renderItem={renderTransaction}
            />
        </>
    )

}
export default PropertyItem;