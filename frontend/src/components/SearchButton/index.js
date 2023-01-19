import {useState, useEffect} from 'react';
import './styles.css';



function SearchButton(props) {

    const search = async (query) => {
        if(isNaN(+query)) {

            const resp = await fetch(`/lrProperty/location/${query}`);
            const json = await resp.json();

            if(json.success)
                return JSON.stringify(json.lrProperty)

        } else {
            
            const resp = await fetch(`/lrProperty/${query}`);
            const json = await resp.json();

            if(json.success)
                return JSON.stringify(json.lrProperty)
        }
    }

    const onClick = async () => {
        props.setView('ResultsView')
        props.setPropertyData(await search(props.query))
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


export default SearchButton;