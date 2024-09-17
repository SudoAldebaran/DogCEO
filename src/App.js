// doc REACT LIBRARY IMPORT
import React from "react";

// doc ROUTE IMPORT
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// doc BOOTSTRAP IMPORT
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

// doc CSS IMPORT
import './App.css';

// doc COMPONENTS IMPORT
import Home from './components/Home';
import Gallery from './components/Gallery';
import Search from './components/Search';
import Footer from './components/Footer';

// doc SVG LOGO
import { ReactComponent as Logo } from './assets/dogCEO_logo.svg';
import { ReactComponent as SearchLogo } from './assets/dogCEO_search.svg';
import { ReactComponent as HomeLogo } from './assets/dogCEO_home.svg';
import { ReactComponent as GalleryLogo } from './assets/dogCEO_gallery.svg';

// doc MAIN REACT APP FUNCTION
function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'rgba(240,233,221,255)' }}>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <Logo style={{ width: '4rem', height: '4rem', color: 'rgb(233, 237, 222)' }} /> {/* doc LOGO */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav">
                <Nav.Link as={Link} to="/" className="nav-item">
                  <HomeLogo style={{ width: '2rem', height: '2rem', fill: 'rgb(233, 237, 222)' }} /> {/* doc ICONE HOME */}
                  <span className="nav-text">Home</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/gallery" className="nav-item">
                  <GalleryLogo style={{ width: '2.5rem', height: '2.5rem', fill: 'rgb(233, 237, 222)' }} /> {/* doc ICONE GALLERY */}
                  <span className="nav-text">Dog Gallery</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/search" className="nav-item">
                  <SearchLogo style={{ width: '2rem', height: '2rem', fill: 'rgb(233, 237, 222)' }} /> {/* doc ICONE SEARCH */}
                  <span className="nav-text">Dog Breed Search</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* doc ALL ROUTES */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} /> {/* doc HOME ROUTE */}
            <Route path="/gallery" element={<Gallery />} /> {/* doc GALLERY ROUTE */}
            <Route path="/search" element={<Search />} /> {/* doc SEARCH ROUTE */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

// doc EXPORT APP => CAN BE IMPORTED FROM OTHER FILES
export default App;
