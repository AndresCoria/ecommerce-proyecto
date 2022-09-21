import React, { useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import Title from '../Title/Title'
import products from '../../api.json'


const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(() => {

    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 3000)
    });
    getData.then(res => setData(res))


  }, [])


  let greeting = 'Alojamiento de Servidores de Juegos'

  const onAdd = (cantidad) => {
    console.log(`agregaste ${cantidad} unidades`);
  }


  return (
    <div>
      <Title greeting={ greeting }/>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer