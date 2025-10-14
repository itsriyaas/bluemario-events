import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import OurWorks from './pages/OurWorks';
import Contact from './pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import NotFound from './pages/NotFound';
import WhatsAppButton from './components/WhatsappButton';
import Blog from './pages/Blog';
import BlogDetails from './components/BlogDetails';
function App() {
 useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
     <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header/>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/our-work" element={<OurWorks />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppButton/>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
