import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Footer from './Components/footer/Footer.js'
import Landing from './pages/Landing.js';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';


function App() {

  return (
    
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/gallery'>
          <Gallery />
        </Route>
      </Switch>
 <Footer/>
   </Router>
  );
}

export default App;
