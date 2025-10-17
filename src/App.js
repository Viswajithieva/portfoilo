import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import './App.css';
import { Link } from 'react-router-dom';
import Home from './Frontend/Home';
import About from './Frontend/About';
import Skills from './Frontend/Skills';
import Certificate from './Frontend/Certificate';
import Contacts from './Frontend/Contacts';
import Project from './Frontend/Project';


function App() {
  return (
  
    <>
      <div>
        <Router>

          <header>
            <div className="nav">
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Skills">Skills</Link>
              <Link to="/Certificate">Certificate</Link>
              <Link to="/Project">Project</Link>
              <Link to="/Contacts">Contacts</Link>
            </div>
          </header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Certificate' element={<Certificate />} />
            <Route path='/Project' element={<Project/>} />
            <Route path='/Contacts' element={<Contacts />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
