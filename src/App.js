
import './App.css';
import NavBar from './componets/navbar/NavBar.jsx';
import Banner from './componets/banner/Banner';
import PicSection from './componets/PicSection/PicSection';
import Cardsection from './componets/cardSection/Cardsection';
import Testimonial from './componets/testimonial/testimonial';
import About from './componets/about/About';
import Footer from './componets/footer/Footer';


function App() {
  return (
   <div className='overflow-x-hidden w-100'>
   <NavBar/>
    <Banner/>
    <PicSection/>
    <Cardsection/>
    <Testimonial/>
<About/>
<Footer/>
    
   </div>
  );
}

export default App;
