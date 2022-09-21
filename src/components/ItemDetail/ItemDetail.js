import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({data}) => {
  return (
      <div className='container'>
        <div className='detail'>
            <img className='detail_img' src={data.img} alt='' />
            <h2>${data.price}</h2>
            <div>
              <h1>{data.title}</h1>
            </div>
            <div className='cont-descrip'>
              <h2>{data.descripcion}</h2>
            </div>
        </div>
      </div>
  );
}

export default ItemDetail;