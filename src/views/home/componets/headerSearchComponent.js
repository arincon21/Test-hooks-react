import React, { useEffect, useState } from 'react'

import SearchAutocomplete from '../../../globalComponents/searchAutocomplete'
import searchForName from '../services/search-for-name'
import searchAll from '../services/seach-all'

const HeaderSearchComponent = (props) => {

    const [pokemonList, setPokemonList] = useState([])

    const keyPress = async event => {
        if (event.key === 'Enter') {
            const request = await searchForName(event.target.value)
            if(request.success){
                props.stateSearchValue(request.response)
            }else{
                console.error(request.response);
            }
        }
    }

    const searchButton = async name => {
        const request = await searchForName(name)
        if(request.success){
            props.stateSearchValue(request.response)
        }else{
            console.error(request.response);
        }
    }

    useEffect(() => {
        (async ()=> {
            const request = await searchAll()
            if(request.success){
                setPokemonList(request.response.results)
            }else{
                console.error(request.response);
            }
        })()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row justify-content-md-center mt-5">
                    <div className="col-md-6">
                        <SearchAutocomplete 
                            listAutocomplete={pokemonList}
                            searchButton={searchButton}
                            keyPress={keyPress}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderSearchComponent
