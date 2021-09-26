import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProveedoresPage from './pages/ProveedoresPage';
import SeriesPage from './pages/SeriesPage';
import PeliculasPage from './pages/PeliculasPage';
import ContactoPage from './pages/ContactoPage';
import ContenidoNetflix from './pages/ContenidoNetflixPage';
import ContenidoHBOmax from './pages/ContenidoHBOmaxPage';
import ContenidoAmazon from './pages/ContenidoAmazonPage';
import ContenidoParamount from './pages/ContenidoParamountPage';
import ContenidoDisney from './pages/ContenidoDisneyPage';
import ContenidoStarZ from './pages/ContenidoStarZPage';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/proveedores" exact component={ProveedoresPage} />
        <Route path="/series" exact component={SeriesPage} />
        <Route path="/peliculas" exact component={PeliculasPage} />
        <Route path="/contacto" exact component={ContactoPage} />
        <Router>
          <Switch>
            <Route path="/netflix" exact component={ContenidoNetflix} />
            <Route path="/hbomax" exact component={ContenidoHBOmax} />
            <Route path="/amazon" exact component={ContenidoAmazon} />
            <Route path="/paramount" exact component={ContenidoParamount} />
            <Route path="/disney" exact component={ContenidoDisney} />
            <Route path="/starz" exact component={ContenidoStarZ} />
          </Switch>
        </Router>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
