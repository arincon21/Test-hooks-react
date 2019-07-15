import React from 'react'

const LisAutocompleteItem = (props) => {

    const changeValueSearch = () => {
        props.onClick(props.value)
    }

    return (
        <>
            <li className="list-group-item list-group-item-action" onClick={changeValueSearch} >
                {props.value}
            </li>
        </>
    )
}


export default LisAutocompleteItem