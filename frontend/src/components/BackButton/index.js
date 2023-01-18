import {useState, useEffect} from 'react';
import './styles.css'


function BackButton(props) {

    const onClick = async () => {
        props.setView('SearchView')
    }

    return (
        <button
        className="back-button"
        placeholder={"Search"}
        type={'button'}
        onClick={onClick}
        >Back</button>
    )

}


export default BackButton;