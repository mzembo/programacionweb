import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/proveedores">Proveedores</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/series">Series</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/peliculas">Películas</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
