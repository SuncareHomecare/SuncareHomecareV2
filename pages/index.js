// import components
import About from '../components/About.js';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Summary from '../components/Summary';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='mx-auto overflow-hidden'>
      <Hero />
      <About />
      <Summary />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
