import React, {useState} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

const ItemDetail = ({data}) => {

  const [IrAlCarrito, setIrAlCarrito] = useState(false);

  const onAdd = (cantidad) => {
    setIrAlCarrito(true);
  }

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
            {
              IrAlCarrito
              ? <Link to='/cart' className='botonBuy'>Finalizar compra</Link>
              : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            }
        </div>
      </div>
  );
}
export default ItemDetail;