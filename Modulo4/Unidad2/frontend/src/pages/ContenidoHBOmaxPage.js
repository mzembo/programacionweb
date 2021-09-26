import '../styles/components/pages/SeriesyPelisPage.css';

const ContenidoHBOmaxPage = (props) => {
    return (
        <main className="holder">
            <div className="prov">
                <img src="images/proveedores/HBOmax/HBOmax_cartel.jpg" alt="HBOmax" />
            </div>
            <h2>Series</h2>
            <div className="provseriepeli">
                <ul>
                    <li className="serieopeli">
                        <h5>Band of Brothers</h5>
                        <p>Diez capítulos que muestra la trayectoria de los miembros del grupo élite de paracaidistas americanos en la Segunda Guerra Mundial.</p>
                        <img src="images/proveedores/HBOmax/series/bob.jpg" alt="Band of Brothers" />
                    </li>
                    <li className="serieopeli">
                        <h5>Big Little Lies</h5>
                        <p>Este aclamado drama, original de HBO, sigue a un grupo de madres de California cuyas vidas aparentemente perfectas dan un giro siniestro.</p>
                        <img src="images/proveedores/HBOmax/series/biglitlelies.jpg" alt="Big Litle Lies" />
                    </li>
                    <li className="serieopeli">
                        <h5>Game of Thrones</h5>
                        <p>Quien se sienta en el Trono de Hierro, controla los Siete Reinos. Game of Thrones sigue la lucha de las casas nobles que codician tal poder.</p>
                        <img src="images/proveedores/HBOmax/series/got.jpg" alt="Game of Thrones" />
                    </li>
                    <li className="serieopeli">
                        <h5>Mare of Easttown</h5>
                        <p>Kate Winslet interpreta a la detective de un pequeño pueblo de Pensilvania que investiga un asesinato local mientras su vida se desmorona.</p>
                        <img src="images/proveedores/HBOmax/series/mare.jpg" alt="Mare of Easttown" />
                    </li>
                    <li className="serieopeli">
                        <h5>Succession</h5>
                        <p>Un mordaz y divertido drama de HBO que explora la política, el dinero y el poder a través de los ojos de una familia bastante disfuncional.</p>
                        <img src="images/proveedores/HBOmax/series/succession.jpg" alt="Succession" />
                    </li>
                </ul>
            </div>
            <h2>Películas</h2>
            <div class="provseriepeli">
                <ul>
                    <li className="serieopeli">
                        <h5>Space Jam</h5>
                        <p>El ícono mundial de la NBA LeBron James se embarca en una aventura épica junto al personaje clásico Bugs Bunny en un evento que combina animación y actores reales, Space Jam: Una nueva era.</p>
                        <img src="images/proveedores/HBOmax/peliculas/spacejam.jpg" alt="Space Jam" />
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default ContenidoHBOmaxPage;
