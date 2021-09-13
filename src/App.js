import { useEffect } from "react"
import {HashRouter as Router, Route, Switch, withRouter, useLocation} from "react-router-dom"
import Home from './pages/Home';
import Shoes from './pages/Shoes';
import Candle from './pages/Cadle';
import ChristmasSpecial from './pages/ChristmasSpecial';
import PhotoBook from './pages/PhotoBook';
import Ideas from "./pages/Ideas"
import Footer from './components/footer/Footer';
import NavBar from './components/nav-bar/NavBar';
import About from './pages/About';


function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <ScrollToTop>
            <Route path="/" exact component={Home} />
            <Route path="/scarpe" exact component={Shoes} />
            <Route path="/candele" exact component={Candle} />
            <Route path="/speciale-natale" exact component={ChristmasSpecial} />
            <Route path="/servizio-fotografico" exact component={PhotoBook} />
            <Route path="/spazio-idea" exact component={Ideas} />
            <Route path="/chi-siamo" exact component={About} />
          </ScrollToTop>
        </Switch>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
