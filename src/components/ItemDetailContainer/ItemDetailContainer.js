import React, { useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import detalles from '../../api.json'



const ItemDetailContainer = () => {

  const [data, setData] = useState({});
  const {detalleId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(detalles);
      }, 3000);
    });

      getData.then(res => setData(res.find(detalle => detalle.id === parseInt(detalleId))));
  }, [])

  return (
      <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer;