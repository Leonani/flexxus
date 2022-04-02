import React, {useState, useRef, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoLista } from './Components/TodoLista';
import { SearchBar } from './Components/SearchBar'

import './css/app.css'

export const KEY = 'itemApp.items'
export function App() {

    const [items, setItems] = useState([
        {id: 1, producto: 'producto 1', descripcion: 'descripcion'},
    ]);

    const [productos, setProductos] = useState([{id: 1, producto: 'producto 1', descripcion: 'pescripcion'}])

    const prodRef = useRef();
    const descRef = useRef ();

    useEffect(() => {
        
        const storedItems = JSON.parse(localStorage.getItem(KEY))
        
        if(storedItems) {
            setItems(storedItems)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(items))
        
    }, [items]);

   

    const handleAdd = (event) => {
        event.preventDefault()

        const producto = prodRef.current.value;
        const descripcion = descRef.current.value;
        

        if(producto === '' || descripcion === '') return

        let prod = {id:uuidv4(), producto, descripcion}
        setItems((preItems) => {
            return [...preItems, prod]
        })

        setProductos([...productos, prod])

        prodRef.current.value = null;
        descRef.current.value = null;
    }

    
    return(
        <React.Fragment>
            <h1>Test FLEXXUS</h1>
            <div className='all'>
                <div className='app'>
                    <div className='search'>
                        <SearchBar items={productos} setItems={setItems}/>
                        <TodoLista items={items}/>
                    </div>
                    <div className='add'>
                        <input ref={prodRef} type='text' placeholder='Ingrese su Producto'/>
                        <textarea ref={descRef} type='text' placeholder='descripcion de su Producto' rows='5'/>
                        <button onClick = {(e)=>handleAdd(e)}> Agregar Producto </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}