import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';
export const Navigations = ({user, login, logout}) => {
  
    return (
        <nav className='enlace'>
            {
            user ?
              <Button size="small" variant="contained" color='secondary' onClick={logout}>logout</Button>
              :
              <Button size="small" variant="contained" color='primary' onClick={login}>login</Button>
              

          }
            <ul className='links    '>

                {
                    Navs.links.map((Links, index) => (

                        <li key={index}>
                            <ButtonGroup  size="small"  aria-label="outlined primary button group">
                                <Button className='btn-color' variant='contained' size="small" color='secondary'>
                                    <Link to={Links.route} className='enlace' >{Links.title || Links.route}</Link>
                                    
                                    </Button>
                            </ButtonGroup>

                        </li>

                    ))
                }

            </ul>

            <Link color="primary" to='/users' className='color-link'> Usuarios</Link>
        </nav>
    )
}

export const Navs = {
    links: [
        { route: '/sis719', title: 'Seminario de Sistemas' },
        { route: '/mensajes', title: 'Mensajes' },
        { route: '/publicaciones', title: 'Publicaciones' },
        { route: '/dashboard', title: 'Dashboard' },
        { route: '/users', title: 'Users' },
        { route: '/laboratorio3', title: 'Laboratorio 3' },

    ]
}
