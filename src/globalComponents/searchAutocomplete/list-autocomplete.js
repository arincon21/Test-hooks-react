import React from 'react'
import Item from './list-autocomplete-item'

export default props => {
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