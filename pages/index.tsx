import '../app/globals.css'; 
import Navbar from '../components/navbar'; // Adjust the path if needed
import HeroSection from '../components/hero'; // Adjust the path if needed
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import FeauturedProducts from '@/components/FeauturedProducts';
import Layout from '@/components/Layout';


const HomePage = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSection />
      <FeauturedProducts/>
      <Testimonials/>
      <Footer/>
    </Layout>
  );
};

export default HomePage;
