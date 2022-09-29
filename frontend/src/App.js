import './App.css';
import Emcabezado from './components/Header';
import { Footer, Sis719 } from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Index, Mensajes, Publicaciones, Dashboard } from './components/Index';
import { Seminario } from './components/Seminario';
import { useState } from 'react';
import { ProtectedRoutes } from './routes/ProtectedRoutes';
function App() {
  const nombre = 'Edson Olmedo Copa';
  const titulo = 'Auxiliatura de Seminario de Sistemas';
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({
      id: 1,
      name: 'edson',
      rol: 'admin'
    })
  }
  const logout = () => {
    setUser(null);
  }

  return (
    <Router>
      <div className="App">
        <Emcabezado
          titulos={titulo}
          nombre={nombre}
        />
        {
          user ?
            <button onClick={logout}>logout</button>
            :
            <button onClick={login}>login</button>

        }
        <Navigations />
        <div>
          <Routes>
            <Route path='/' element={<Index />}></Route>
            <Route path='/sis719/*' element={<Sis719 />}>
              <Route path='auxiliatura' element={<Seminario />}></Route>
            </Route>

            <Route element={<ProtectedRoutes user={user} />}>
              <Route path='/publicaciones' element={<Publicaciones />} />
              <Route path='/mensajes' element={<Mensajes />} />
            </Route>

            <Route path='/dashboard' element={
              <ProtectedRoutes user={!!user && user.rol.includes('admin')}>
                <Dashboard />
              </ProtectedRoutes>
            } />

          </Routes>
        </div>
        <Footer
          nombre={nombre}
          titulos={titulo}

        />

      </div>
    </Router>
  );
}
export default App;
function Navigations() {
  return <nav>
    <ul>
      <li>
        <Link to={'/sis719'}>seminario de sistemas</Link>
      </li>
      <li>
        <Link to={'/mensajes'}>mensajes</Link>
      </li>
      <li>
        <Link to={'/publicaciones'}>publicaciones</Link>
      </li>
      <li>
        <Link to={'/dashboard'}>dashboard</Link>
      </li>
    </ul>
  </nav>

}