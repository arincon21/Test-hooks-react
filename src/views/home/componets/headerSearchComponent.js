import React, { useEffect, useState } from 'react'
import axios from 'axios'

import SearchAutocomplete from '../../../globalComponents/searchAutocomplete'

const HeaderSearchComponent = (props) => {

    const [pokemonList, setPokemonList] = useState([])

    const keyPress = event => {
        if (event.key === 'Enter') {
            console.log('keyPress - value: ', event.target.value)
        }
    }

    const searchButton = (value) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then(({ data }) => {
            props.stateSearchValue(data)
            
        })
        .catch(error => {
            console.log(error)
        })

        console.log('Boton - value: ', value)
    }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=964`)
        .then(({ data }) => {
            setPokemonList(data.results)
        })
        .catch(error => {
            console.log(error)
        })
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
