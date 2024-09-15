// doc REACT LIBRARY IMPORT
import React from "react";

// doc ROUTE IMPORT
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// doc COMPONENETS IMPORT
import Home from './components/Home';
import Gallery from './components/Gallery';
import Search from './components/Search';

// doc MAIN REACT APP FUNCTION
function App() {
  return (
    // doc ALL INSIDE WILL BE CONTROLLED BY REACT ROUTING
    <Router>
      <div>
        <nav style={{ width: '100%', backgroundColor: '#f8f9fa', padding: '10px 0' }}>
          <ul style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            listStyle: 'none', 
            padding: 0, 
            margin: 0 
          }}>
            <li style={{ margin: '0 10px' }}>
              <Link to="/">
                <img src="/images/dogCEO_home.png" alt="Home" style={{ width: '100px', height: '100px' }} />
              </Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/gallery">
                <img src="/images/dogCEO_gallery.png" alt="Gallery" style={{ width: '100px', height: '100px' }} />
              </Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/search">
                <img src="/images/dogCEO_search.png" alt="Search" style={{ width: '100px', height: '100px' }} />
              </Link>
            </li>
          </ul>
        </nav>

        {/* doc ALL ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* doc HOME ROUTE */}
          <Route path="/gallery" element={<Gallery />} /> {/* doc GALLERY ROUTE */}
          <Route path="/search" element={<Search />} /> {/* doc SEARCH ROUTE */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
