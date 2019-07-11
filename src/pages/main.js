import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from '../components/component-navbar'
import SearchComponent from '../components/componet-search'
import Card from '../components/componet-card'


function App() {

    const [pokemonList, setPokemonList] = useState([])
    const [searchValue, setSearchValue] = useState("")
    
    const keyPress = event => {
        if (event.key === 'Enter') {
            setSearchValue(event.target.value)
            console.log('keyPress - value: ',event.target.value)
        }     
    }

    const searchButton = (value) => {
        setSearchValue(value)
        console.log('Boton - value: ',value)
    }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=964`).then(({data}) => {
            setPokemonList(data.results)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    return (
        <>
            <Navbar />
            <SearchComponent 
                listAutocomplete={pokemonList} 
                searchButton = {searchButton}
                keyPress={keyPress}
            />
            <div className="container mt-5">
                <div className="row justify-content-md-center mt-5">
                    <div className="col-md-6">
                        Hay { pokemonList.count } pokemon
                        <Card />
                    </div>
                </div>               
            </div>            
        </>
	)
}

export default App
