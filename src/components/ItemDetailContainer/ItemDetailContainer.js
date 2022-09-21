import React, { useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const detalle = { id: 7, img: "/images/cs_detalle.jpg", title: "Counter Strike 1.6", "descripcion": "Servidores de Counter Strike 1.6 de 1000, 500 y 300 fps. Panel TCAdmin con acceso total. Rehlds, Metamod, Regame y AmxmodX actualizados. Fastdl, acceso ftp y Sistema de mitigacion de ataques, acceso Rcon y soporte las 24hs",price: 500};


const ItemDetailContainer = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(detalle);
      }, 3000);
    });

      getData.then(res => setData(res));
  }, [])

  return (
      <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer;