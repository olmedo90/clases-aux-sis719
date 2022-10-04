import './App.css';
import Emcabezado from './components/Header';
import { Footer, Sis719 } from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Index, Mensajes, Publicaciones, Dashboard } from './components/Index';
import { Seminario } from './components/Seminario';
import { useState } from 'react';
import { ProtectedRoutes } from './routes/ProtectedRoutes';
import { Navigations } from './routes/Navigations';
import {  ThemeProvider } from '@material-ui/core';
import {Colors} from './utils/Colors';
import { Usurs, Insertar } from './components/users/Usurs';
import {Theme} from './components/Laboratorio3/Theme'
import {Palette} from './components/Laboratorio3/palette/Index'
import ViewPort from './components/Laboratorio3/ViewPort';
function App() {
  const nombre = 'Edson Olmedo Copa';
  const titulo = 'Auxiliatura de Seminario de Sistemas';
  const [user, setUser] = useState(null);
 
  const login = () => {
    setUser({
      id: 1,
      name: 'edson',
      rol: ''
    })
  }
  const logout = () => {
    setUser(null);
  }

  return (
    <ThemeProvider theme={Colors}>
      <Router>
        <div className="App">
          <Emcabezado
            titulos={titulo}
            nombre={nombre}
          />
          
          <Navigations login={login} logout={logout} user={user} />

          <div className='containers'>
            <Routes>
              <Route path='/users/*' element={<Usurs/>}>
                  <Route path='insertar' element={<Insertar/>}></Route>
              </Route>
              
              <Route path='/' element={<Theme>
                <ViewPort/>
                </Theme>}></Route>
              <Route path='/index' element={<Index />}></Route>
              <Route path='/sis719/*' element={<Sis719 />}>
                <Route path='auxiliatura' element={<Seminario />}></Route>
              </Route>

              <Route element={<ProtectedRoutes user={user} />}>
                <Route path='/publicaciones' element={<Publicaciones />} />
                <Route path='/mensajes' element={<Mensajes />} />
              </Route>

              <Route element={<ProtectedRoutes user={!!user && user.rol.includes('admin')} />}>
                <Route path='/dashboard' element={<Dashboard />} />
                {/* <Route path='/users' element={<Users/>} /> */}
              </Route>

            </Routes>
          </div>

          <Footer
            nombre={nombre}
            titulos={titulo}

          />

        </div>
      </Router>
    </ThemeProvider>

  );
}
export default App;
