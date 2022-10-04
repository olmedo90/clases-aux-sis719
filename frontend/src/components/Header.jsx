import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const Header = ({titulos, nombre}) => {
    const [show, setShow] = useState(true);
    
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
        color:'#3ab542',
        border: '4px solid #000000'
    }
  return (
    <div className='headers' style={show ?color1:color2}>
        <h1>{titulos}</h1>
        <Button variant='contained' color='info' onClick={()=>color()}> color</Button>
        
    </div>
  )
}

export default Header