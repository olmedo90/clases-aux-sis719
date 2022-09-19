import React from 'react'
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
      <footer>
          <h4>SIS-719</h4>
      </footer>
    )
  }

