import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import SpecialSection from './components/Special Section/SpecialSection';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <body>
        <Hero></Hero>
        <SpecialSection></SpecialSection>
        <Testimonials></Testimonials>
        <About></About>
\      </body>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
