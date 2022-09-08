import './App.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Candidates from './components/Candidates';
import Details from './components/Details';
import About from './components/About';
import Footer from './components/utils/Footer';



function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/candidates">Candidates</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/candidates/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;