import React from 'react'
import { TodoItems } from './TodoItems'

export function TodoLista({items}) {
  return (
    <div>
         <ul>
            {items.map(item => (
                <TodoItems  key={item.id} item={item} />
            ))}
        </ul>
    </div>
   
  )
}
