import { FcMoneyTransfer, FcCalendar } from 'react-icons/fc';
import './styles.css';

function ListItem(props) {

    return (
        <div className='container'>
            <div className='date-container'>
                <FcCalendar size={30} className='margin'/>
                <p> { JSON.stringify(props.transaction.date)} </p>
            </div>
            <div className='price-container'>
                <FcMoneyTransfer size={30} className='margin' />
                <p> £{ JSON.stringify(props.transaction.price)} </p>
            </div>
        </div>

    )

}

export default ListItem;