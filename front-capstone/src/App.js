import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import SpecialSection from './components/Special Section/SpecialSection';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer';
import Main from './components/Booking/Main';

function MainRoutes() {
  return (
    <>
      <Hero />
      <SpecialSection />
      <Testimonials />
      <About />
    </>
  );
}

function App() {

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<MainRoutes />} />
          <Route path='/booking' element={<Main/>}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;