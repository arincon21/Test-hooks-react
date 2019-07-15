import React from 'react'
import Item from './list-autocomplete-item'

const ListAutocomplete = (props) => {
    return (
        <>
            <ul className={props.className} >
                {
                    props.listOptions.map((item, index) => {
                        return <Item
                            key={index}
                            value={item.name}
                            onClick={props.onClick}
                        />
                    })
                }
            </ul>
        </>
    )
}

export default ListAutocomplete