import '../styles/components/pages/SeriesyPelisPage.css';

const ContenidoParamountPage = (props) => {
    return (
        <main className="holder">
            <div className="prov">
                <img src="images/proveedores/Paramount+/paramount+_cartel.png" alt="Paramount+" />
            </div>
            <h2>Series</h2>
            <div className="provseriepeli">
                <ul>
                    <li className="serieopeli">
                        <h5>For Life</h5>
                        <p>For Life se inspira en la vida de Isaac Wright Jr. Éste es un prisionero que acaba por convertirse en abogado con el objetivo de revocar su cadena perpetua por un crimen que no cometió.</p>
                        <img src="images/proveedores/Paramount+/series/forlife.jpg" alt="For Life" />
                    </li>
                    <li className="serieopeli">
                        <h5>Killing Eve</h5>
                        <p>Killing Eve sigue la historia de dos increíbles mujeres con una inteligencia prodigiosa. Por un lado está Villanelle, una asesina psicópata sumida en el lujo de su profesión y por otro lado, Eve, una agente de seguridad.</p>
                        <img src="images/proveedores/Paramount+/series/killingeve.jpg" alt="Killing Eve" />
                    </li>
                    <li className="serieopeli">
                        <h5>Strange Angel</h5>
                        <p>Ambientado en Los Ángeles en los años 30, este drama sigue la vida de Jack Parsons, un obrero brillante y que siempre ha aspirado a ser más que un conserje en una fábrica de productos químicos, tal y como fueron sus inicios.</p>
                        <img src="images/proveedores/Paramount+/series/strangeangel.jpg" alt="Strange Angel" />
                    </li>
                    <li className="serieopeli">
                        <h5>Yor Honor</h5>
                        <p>El hijo de un juez muy respetado se ve inmerso en una persecución que lleva a importantes mentiras, engaños y decisiones imposibles.</p>
                        <img src="images/proveedores/Paramount+/series/yourhonor.jpg" alt="Your Honor" />
                    </li>
                </ul>
            </div>
            <h2>Películas</h2>
            <div class="provseriepeli">
                <ul>
                    <li className="serieopeli">
                        <h5>The Fanatic</h5>
                        <p>Un fanático al cine desarrolla una peculiar obsesión con su héroe favorito de acción, Hunter Dunbar, que le lleva a averiguar su paradero y, posteriormente, a destruir su vida profesional y personal.</p>
                        <img src="images/proveedores/Paramount+/peliculas/thefanatic.jpg" alt="The Fanatic" />
                    </li>
                    <li className="serieopeli">
                        <h5>The Outpost</h5>
                        <p>Una pequeña unidad de soldados estadounidenses, estacionada en Afganistán, hace frente al ataque avasallador de un grupo más numeroso de talibanes.</p>
                        <img src="images/proveedores/Paramount+/peliculas/theoutpost.jpg" alt="The Outpost" />
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default ContenidoParamountPage;
