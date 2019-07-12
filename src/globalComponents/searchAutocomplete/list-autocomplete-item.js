import React from 'react'

export default props => {

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