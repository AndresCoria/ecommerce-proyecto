import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='contenedor'>
      <a href="#" className='Logo'><img src='/images/logo.ico' alt='LOGO' /></a>

      <input type="checkbox" id="menu-bar"></input>
      <label for="menu-bar">menu</label>

      <nav className='navbar'>
        <ul>
          <li><a href='#'>Inicio</a></li>
          <li><a href='#'>Productos</a>
              <ul>
                <li><a href='#'>Hamburguesas</a></li>
                <li><a href='#'>Picadas</a></li>
                <li><a href='#'>Cervezas</a></li>
                <li><a href='#'>Tragos</a></li>
              </ul>
          </li>
          <li><a href='#'>Nosotros</a></li>
          <li><a href='#'>Contacto</a></li>
          <li><a href='#'>Carrito</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar