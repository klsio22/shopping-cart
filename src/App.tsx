import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Store } from './pages/Store';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
