import React, {useState,useEffect} from 'react'
import '../styles/componet-search.scss'

function SearchComponent(props) {
    
    const [valueSearch, setValueSearch] = useState("")
    const [listAutocomplete, setListAutocomplete] = useState([])

    useEffect(() => {
        if(valueSearch !== ""){
            const listQuery = props.listAutocomplete.filter(item => item.name.toLowerCase().includes(valueSearch.toLowerCase()))
            setListAutocomplete(listQuery)
        }
    },[props.listAutocomplete, valueSearch])

    const changeValueSearch = event => {
        setValueSearch(event.target.value)
    }

    const onButtonClick = () => {
        props.searchButton(valueSearch)
    }

    const selectOption = obj => {
        setValueSearch(obj.name)
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-md-center mt-5">
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search......"
                                value={valueSearch}
                                onChange={changeValueSearch}
                                onKeyPress={props.keyPress}
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-dark"
                                    type="button"
                                    onClick={onButtonClick}
                                >
                                    Button
                                </button>
                            </div>

                            <ul 
                                className={valueSearch !== "" ? 'list-group list-autocomplete' : 'list-group list-autocomplete hidden'} 
                            >
                                {
                                    listAutocomplete.map((item, index) => {
                                        return <li 
                                            className="list-group-item list-group-item-action" 
                                            key={index}
                                            onClick={() => selectOption(item)} 
                                        > 
                                            {item.name}
                                        </li>
                                    }) 
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchComponent