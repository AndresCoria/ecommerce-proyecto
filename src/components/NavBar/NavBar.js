import React from 'react'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (
    <div className='contenedor'>
      <a href="#" className='Logo'><img src='/images/logo-blanco.png' alt='LOGO' /></a>

      <input type="checkbox" id="menu-bar"></input>
      <label for="menu-bar">menu</label>

      <nav className='navbar'>
        <ul>
          <li><a href='#'>Inicio</a></li>
          <li><a href='#'>Counter-Strike 1.6</a></li>
          <li><a href='#'>Counter-Strike GO</a></li>
          <li><a href='#'>Counter-Strike Source</a></li>
          <li><a href='#'>Half-Life</a></li>
          <li><a href='#'>
            <CardWidget />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar