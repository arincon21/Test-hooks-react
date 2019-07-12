import React,{ useState, useEffect }  from 'react'
import ListAutocomplete from './list-autocomplete'
import './style.scss'

export default props => {
 
    const [valueSearch, setValueSearch] = useState("")
    const [listAutocomplete, setListAutocomplete] = useState([])

    useEffect(() => {
        if (valueSearch !== "") {
            const listQuery = props.listAutocomplete.filter(item => item.name.toLowerCase().includes(valueSearch.toLowerCase()))
            setListAutocomplete(listQuery)
        }
    }, [props.listAutocomplete, valueSearch])

    const changeValueSearch = event => {
        setValueSearch(event.target.value)
    }

    const onButtonClick = () => {
        props.searchButton(valueSearch)
    }

    const selectOption = obj => {
        setValueSearch(obj)
    }

    return (
        <React.Fragment>
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
                <ListAutocomplete
                    className={valueSearch !== "" ? 'list-group list-autocomplete' : 'list-group list-autocomplete hidden'}
                    listOptions={listAutocomplete}
                    onClick={selectOption}
                />
            </div>
        </React.Fragment>
    )
} 