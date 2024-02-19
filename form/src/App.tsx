import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import { Container } from '@mui/material';
import ListaPersonas from './pages/ListaPersonas';
import FormPersona from './pages/FormPersona';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>

  );
}

export default App
