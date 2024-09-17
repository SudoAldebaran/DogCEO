// doc REACT LIBRARY IMPORT
import React from "react";

// doc ROUTE IMPORT
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// doc BOOTSTRAP IMPORT
import 'bootstrap/dist/css/bootstrap.min.css';
// doc BOOTSTRAP ICONS IMPORT
import 'bootstrap-icons/font/bootstrap-icons.css';

// doc CSS IMPORT
import './App.css'; // Assure-toi d'importer le fichier CSS

// doc COMPONENETS IMPORT
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
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <nav style={{
          width: '100%',
          backgroundColor: 'rgb(56, 95, 113)',
          padding: '10px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ marginLeft: '20px' }}>
            <Logo style={{ width: '6rem', height: '6rem', color: 'rgb(233, 237, 222)' }} />
          </div>
          <ul style={{
            display: 'flex',
            justifyContent: 'center',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            flex: 1,
            gap: '20px' 
          }}>
            <li className="nav-item" style={{ margin: '0 80px' }}>
              <Link to="/">
                <HomeLogo style={{ width: '2rem', height: '2rem', color: 'rgb(233, 237, 222)' }} /> {/* doc HOME ICON */}
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li className="nav-item" style={{ margin: '0 80px' }}>
              <Link to="/gallery">
                <GalleryLogo style={{ width: '2.7rem', height: '2.7rem', color: 'rgb(233, 237, 222)' }} /> {/* doc GALLERY ICON */}
                <span className="nav-text">Dog Gallery</span>
              </Link>
            </li>
            <li className="nav-item" style={{ margin: '0 80px' }}>
              <Link to="/search">
                <SearchLogo style={{ width: '2rem', height: '2rem', color: 'rgb(233, 237, 222)' }} /> {/* doc SEARCH ICON */}
                <span className="nav-text">Dog Breed Search</span>
              </Link>
            </li>
          </ul>
        </nav>

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

export default App;
