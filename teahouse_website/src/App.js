
import './App.css';
import Footer from './components/front/Footer/Footer';
import News from './components/front/News/News';
import Booking from './components/front/Booking/Booking';
import Intro from './components/front/Intro/Intro';
import Products from './components/front/Products/Products';

function App() {
  
  return (
    <div className="App">
      
      <Intro/>
      <Products /> 
      <Booking/>
      <News/>
      <Footer />
    </div>
  );
}

export default App;
