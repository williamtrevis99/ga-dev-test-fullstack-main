import './styles.css';

// search method
const search = async (query) => {

    if(isNaN(+query)) {

        const isPostCode = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/.test(query)

        // if is a postcode
        if (isPostCode) {
            const resp = await fetch(`/lrProperty/transactions/?postcode=${query.toUpperCase()}`);
            const json = await resp.json();
            
            return json.lrProperty

        }

        // if is a street name
        else {
            const resp = await fetch(`/lrProperty/transactions/?street=${query.toUpperCase()}`);
            const json = await resp.json();

            return json.lrProperty

        }
    // if it is an ID
    } else {
        
        const resp = await fetch(`/lrProperty/transactions/?id=${query}`);
        const json = await resp.json();

        return json.lrProperty
    }
}


function SearchButton(props) {

    const isQueryEmpty = () => {
        if (props.query === '') return true
        return false
    }

    const onClick = async () => {
        props.setView('LoadingView')
        props.setPropertyData(await search(props.query))
        props.setView('ResultsView')
    }

    return (
        <button 
            className="button"
            placeholder={"Search"}
            type={'button'}
            onClick={onClick}
            disabled={isQueryEmpty()}
        >Search</button>
    )

}


export default SearchButton;