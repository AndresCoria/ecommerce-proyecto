import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Title from '../Title/Title'
import products from '../../api.json'
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let greeting = 'Alojamiento de Servidores de Juegos'
  const {categoriaId} = useParams();


  useEffect(() => {

    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 3000)
    });
    if(categoriaId) {
      getData.then(res => setData(res.filter(products => products.categoria === categoriaId)));
    }else {
      getData.then(res => setData(res));
    }
  }, [categoriaId]);

  return (
    <div>
      <Title greeting={ greeting }/>
      <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer