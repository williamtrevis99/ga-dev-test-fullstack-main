import './styles.css';


function SearchButton(props) {

    const search = async (query) => {

        if(isNaN(+query)) {

            const isPostCode = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/.test(query)

            // if is a postcode
            if (isPostCode) {
                const resp = await fetch(`/lrProperty/transactions/?postcode=${query}`);
                const json = await resp.json();

                if(json.success)
                    return json.lrProperty

            }

            // if is a street name
            else {
                const resp = await fetch(`/lrProperty/transactions/?street=${query}`);
                const json = await resp.json();

                if(json.success)
                    return json.lrProperty

            }

        } else {
            
            const resp = await fetch(`/lrProperty/transactions/?id=${query}`);
            const json = await resp.json();

            if(json.success)
                console.log(json.lrProperty)
                return json.lrProperty
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