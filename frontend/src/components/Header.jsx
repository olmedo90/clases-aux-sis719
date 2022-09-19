import { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({titulos, nombre}) => {
    const [show, setShow] = useState(false);
    
    const color =()=>{
      setShow(!show);
    }

    const color1 ={
        background:'#3ab542',
        color:'#303630',
        border: '4px solid #000000'
    }
    const color2 ={
        background:'#2244d8',
        color:'#2243d6',
        border: '4px solid #2243d6'
    }
  return (
    <div style={show ?color1:color2}>
        <h1>{titulos}</h1>
        <button onClick={()=>color()}> color</button>
    </div>
  )
}

export default Header