import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../App.css';
export function Footer  (props) {
  return (
    <footer className='footer'>
        <h3>seminario 2-2022</h3>
        <p>{props.nombre}</p>
        <p>{props.titulos}</p>
    </footer>
  )
}
export function Sis719  () {
    return (
      <div>
        
        <h4>SIS-719</h4>
        <Link to={'auxiliatura'}>Auxiliatura</Link><br />
        <Link to={'/'}>principal</Link>

        <Outlet/>
      </div>
    )
  }

