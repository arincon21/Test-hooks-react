import React,{ useState, useEffect }  from 'react'
import ListAutocomplete from './list-autocomplete'
import './style.scss'

const SearchAutocomplete = (props) => {
    const [valueSearch, setValueSearch] = useState("")
    const [listAutocomplete, setListAutocomplete] = useState([])
    const [listState, setListState] = useState(false)

    useEffect(() => {
        if (valueSearch !== "") {
            const listQuery = props.listAutocomplete.filter(item => item.name.toLowerCase().includes(valueSearch.toLowerCase()))
            setListAutocomplete(listQuery)
            console.log(listQuery);
            if(listQuery.length > 0){
                if(listQuery.length === 1 && listQuery[0].name === valueSearch.toLowerCase()){
                    setListState(false)
                }else{
                    setListState(true)
                }
            }else{
                setListState(false)
            }
        }else{
            setListState(false)
        }
    }, [props.listAutocomplete, valueSearch])

    const changeValueSearch = event => {
        setValueSearch(event.target.value)
    }

    const onButtonClick = () => {
        props.searchButton(valueSearch)
        setListState(false)
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
                    className={listState ? 'list-group list-autocomplete' : 'list-group list-autocomplete hidden'}
                    listOptions={listAutocomplete}
                    onClick={selectOption}
                />
            </div>
        </React.Fragment>
    )
}

export default SearchAutocomplete