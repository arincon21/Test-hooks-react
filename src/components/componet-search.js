import React, {useState,useEffect} from 'react'
import '../styles/componet-search.scss'

function SearchComponent(props) {
    
    const [valueSearch, setValueSearch] = useState("")
    const [listAutocomplete, setListAutocomplete] = useState('Cargando....')

    useEffect(() => {
        if(props.listAutocomplete){
            if(valueSearch !== ""){
                const listQuery = props.listAutocomplete.filter(item => item.name.toLowerCase().includes(valueSearch.toLowerCase()))
                let list = <li className="list-group-item list-group-item-action"> Ese pokemon no existe</li>
                if(listQuery.length > 0){
                    list = listQuery.map((item, index) => <li className="list-group-item list-group-item-action" key={index}> {item.name} </li>)
                }
                setListAutocomplete(list)
            }else{
                const list = props.listAutocomplete.map((item, index) => <li className="list-group-item list-group-item-action" key={index}> {item.name} </li>)
                setListAutocomplete(list)
            }
        }
    },[props.listAutocomplete, valueSearch])

    const changeValueSearch = event => {
        setValueSearch(event.target.value)
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
                                    onClick={props.searchButton}
                                >
                                    Button
                                </button>
                            </div>

                            <ul className={valueSearch !== "" ? 'list-group list-autocomplete' : 'list-group list-autocomplete hidden'} >
                                {listAutocomplete}
                            </ul>

                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchComponent