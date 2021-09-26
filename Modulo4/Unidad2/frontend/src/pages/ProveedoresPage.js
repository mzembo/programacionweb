import '../styles/components/pages/ProveedoresPage.css';
import { NavLink } from 'react-router-dom';

const ProveedoresPage = (props) => {
    return (
        <main className="holder">
            <div className="proveedores">
                <h2>Seleccioná un proveedor para acceder a su contenido</h2>
                <ul>
                    <li className="proveedor">
                        <NavLink activeClassName="escala" exact to="/netflix">
                            <img src="images/proveedores/Netflix/netflix.jpg" alt="Netflix" />
                        </NavLink>
                    </li>
                    <li className="proveedor">
                        <NavLink activeClassName="escala" exact to="/hbomax">
                            <img src="images/proveedores/HBOmax/HBOmax.jpg" alt="HBO max" />
                        </NavLink>
                    </li>
                    <li className="proveedor">
                        <NavLink activeClassName="escala" exact to="/amazon">
                            <img src="images/proveedores/Amazon/primeVideo.jpg" alt="Amazon Prime Video" />
                        </NavLink>
                    </li>
                    <li className="proveedor">
                        <NavLink activeClassName="escala" exact to="/paramount">
                            <img src="images/proveedores/Paramount+/paramount+.jpg" alt="Paramount+" />
                        </NavLink>
                    </li>
                    <li className="proveedor">
                        <NavLink activeClassName="escala" exact to="/disney">
                            <img src="images/proveedores/Disney+/disney+.jpg" alt="Disney+" />
                        </NavLink>
                    </li>
                    <li className="proveedor">
                        <NavLink activeClassName="escala" exact to="/starz">
                            <img src="images/proveedores/starz/starZ.jpg" alt="StarZ" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </main>

    )
}

export default ProveedoresPage;
