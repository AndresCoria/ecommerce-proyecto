import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Title from '../Title/Title'

const ItemListContainer = () => {

  let greeting = 'Bienvenidos A Cerveceria Zaion'

  const onAdd = (cantidad) => {
    console.log(`agregaste ${cantidad} unidades`);
  }


  return (
    <div>
      <Title greeting={ greeting }/>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer