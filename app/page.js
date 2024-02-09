import HeroSection from './ui/Home/HeroSection'
import ProductOne from './ui/Home/ProductOne'
import Products from './ui/Home/Products'
import HeroCarousal from './ui/common/HeroCarousal';
import AboutUs from './ui/Home/AboutUs'
import Resources from './ui/Home/Resources'
import ContactUs from '../app/ui/Home/ContactUs'

export default function Home() {
  return (
    <>
     <HeroSection/>
     <AboutUs/>
     <HeroCarousal/>
     <ProductOne/>
     <Products/>
      <Resources/>
      <ContactUs/>
    </>
  );
}
