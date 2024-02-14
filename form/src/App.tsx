import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import { Container } from '@mui/material';
import ListaPersonas from './pages/ListaPersonas';
import FormPersona from './pages/FormPersona';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Link to="/persona">Agregar Personas</Link>
        <Routes>
          <Route path='/' element={<ListaPersonas />} />
          <Route path='/persona' element={<FormPersona />} />
          <Route path='/persona/:personaId/editar' element={<FormPersona />} />
        </Routes>
        
      </Container>
    </BrowserRouter >


  );
}

export default App
