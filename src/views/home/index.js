import React,{useState} from 'react'

import Navbar from '../../globalComponents/component-navbar'
import HeaderSearchComponent from './componets/headerSearchComponent'
import ContainerCard from './componets/containerCards'

function App() {

    const [searchValue, setSearchValue] = useState([])

    return (
        <>
            <Navbar/>
            <HeaderSearchComponent stateSearchValue={setSearchValue} />
            <ContainerCard data={searchValue}/>
        </>
    )
}

export default App
