import React from 'react'
import '../css/todoItems.css'
export function TodoItems({item}) {
    const {id, producto, descripcion} = item

    return (

        
        <li>
            <div className='card'>
                <h2>{producto}</h2>                
                <p>{descripcion}</p>
                
            </div>
        </li>
        
    )
}
