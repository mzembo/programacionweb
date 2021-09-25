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
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
