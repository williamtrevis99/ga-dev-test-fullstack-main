import {useState, useEffect} from 'react';
import './styles.css';



function Button(props) {

    const onClick = () => {
        props.setSearchState('searching')
    }

    return (
        <button 
            className="button"
            placeholder={"Search"}
            type={'button'}
            onClick={onClick}
        >Search</button>
    )

}


export default Button;