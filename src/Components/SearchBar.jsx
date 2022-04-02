import React, {useState, useEffect} from "react";
import '../css/searchbar.css'

export function SearchBar({items, setItems}) {
    
    const [input, setInput] = useState('')

    useEffect(()=>{
        let filtrado = items.filter((element)=>{
            
            return element.descripcion.includes(input) || element.producto.includes(input) 
        })
        setItems(filtrado)
    },[input])

    function handleInputChange(e) {
        e.preventDefault()
        setInput(e.target.value)  
        
    }

    return(
        <div className='cont'>
            <input type='text' value={input} placeholder='  Buscar producto por descripcion' onChange={e=>handleInputChange(e)}/>
                    
        </div>
    )
    
}