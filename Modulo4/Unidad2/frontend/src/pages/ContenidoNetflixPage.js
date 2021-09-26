import '../styles/components/pages/SeriesyPelisPage.css';

const ContenidoNetflixPage = (props) => {
    return (
        <main className="holder">
            <div className="prov">
                <img src="images/proveedores/Netflix/Netflix_cartel.jpg" alt="Netflix" />
            </div>
            <h2>Series</h2>
            <div className="provseriepeli">
                <ul>
                    <li className="serieopeli">
                        <h5>House of Cards</h5>
                        <p>House of Cards sigue al político del partido demócrata Francis Underwood (Kevin Spacey) en sus intentos por alcanzar un alto puesto en la esfera política de Washington.</p>
                        <img src="images/proveedores/Netflix/series/houseofcards.jpg" alt="House of Cards" />
                    </li>
                    <li className="serieopeli">
                        <h5>La casa de papel</h5>
                        <p>Ocho ladrones toman rehenes y se resguardan en la Fábrica Nacional de Moneda de España, mientras el líder de la banda manipula a la policía para cumplir con su plan.</p>
                        <img src="images/proveedores/Netflix/series/lacasadepapel.jpg" alt="La casa de papel" />
                    </li>
                    <li className="serieopeli">
                        <h5>Ozark</h5>
                        <p>Un asesor financiero arrastra a su familia desde Chicago hasta los lagos de Ozark para lavar 500 millones de dólares en cinco años y tranquilizar a un jefe narco.</p>
                        <img src="images/proveedores/Netflix/series/ozark.jpg" alt="Ozark" />
                    </li>
                    <li className="serieopeli">
                        <h5>Stranger Things</h5>
                        <p>La historia arranca durante la década de los 80, en el pueblo ficticio de Hawkins, Indiana, cuando un niño llamado Will Byers desaparece misteriosamente.</p>
                        <img src="images/proveedores/Netflix/series/strangerthings.jpg" alt="Stranger Things" />
                    </li>
                    <li className="serieopeli">
                        <h5>The Crown</h5>
                        <p>Drama sobre las rivalidades políticas y los romances acaecidos durante el reinado de Isabel II, así como de los eventos que moldearían la segunda mitad del siglo XX.</p>
                        <img src="images/proveedores/Netflix/series/thecrown.jpg" alt="The Crown" />
                    </li>
                </ul>
            </div>
            <h2>Películas</h2>
            <div class="provseriepeli">
                <ul>
                    <li className="serieopeli">
                        <h5>Beckett</h5>
                        <p>Una pareja de novios se dispone a pasar unas vacaciones idílicas en Atenas (Grecia). Sin embargo, al poco de llegar a la capital griega acaban envueltos en una violenta conspiración.</p>
                        <img src="images/proveedores/Netflix/peliculas/beckett.jpg" alt="Beckett" />
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default ContenidoNetflixPage;
