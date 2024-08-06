import Header from './components/Header';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home';
import Services from './components/Services';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';

const App = () => {
  return(
    <main>
      <Header/>
      <Home/>
      <Services/>
      <Aboutus/>
      <Footer/>
    </main>
  )
}

export default App;
