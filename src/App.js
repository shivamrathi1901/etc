import './App.css';
import './main.css';
// import './styles.css';
// import './styles1.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Services from './pages/services.js';

import Header from './pages/header.js';
import Footer from './pages/footer.js';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/etc" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
