import React from 'react'
import './Item.css'

const Item = ( {info} ) => {
  return (
    <div id='div-cont'>
      <a href=''>
        <img className='imagen' src={ info.img } alt='' />
        <p>{ info.title }</p>
        <p>${info.price}</p>
        <button className='ver'>Ver Mas Detalles</button>
      </a>
    </div>
  )
}

export default Item

{/* <>
  <img className='imagen' src={ info.img }/>
</>
<>
  <p>{ info.title }</p>
</>
<>
  <p>${info.price}</p>
</>
<>
  <button>Ver Mas Detalles</button>
</> */}

