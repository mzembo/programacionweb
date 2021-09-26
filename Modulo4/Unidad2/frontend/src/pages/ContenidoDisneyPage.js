import '../styles/components/pages/SeriesyPelisPage.css';

const ContenidoDisneyPage = (props) => {
    return (
        <main className="holder">
            <div className="prov">
                <img src="images/proveedores/Disney+/disney+_cartel.png" alt="Disney+" />
            </div>
            <h2>Series</h2>
            <div className="provseriepeli">
                <ul>
                    <li className="serieopeli">
                        <h5>Mandalorian</h5>
                        <p>La serie sigue los pasos de Mando, un cazarrecompensas perteneciente a la legendaria tribu de los mandalorianos, un pistolero solitario que trabaja en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.</p>
                        <img src="images/proveedores/Disney+/series/mandolarian.jpg" alt="Mandalorian" />
                    </li>
                    <li className="serieopeli">
                        <h5>WandaVision</h5>
                        <p>Wanda Maximoff y Vision llegan a vivir al pueblo de Westview, donde tendrán que esconder sus súperpoderes para acoplarse a la vida mundana de los suburbios. Sin embargo nada es lo que parece y poco a poco la realidad comenzará a desvanecerse.</p>
                        <img src="images/proveedores/Disney+/series/wandavision.png" alt="WandaVision" />
                    </li>
                </ul>
            </div>
            <h2>Películas</h2>
            <div class="provseriepeli">
                <ul>
                    <li className="serieopeli">
                        <h5>Avengers</h5>
                        <p>El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.</p>
                        <img src="images/proveedores/Disney+/peliculas/avengers.png" alt="Avengers" />
                    </li>
                    <li className="serieopeli">
                        <h5>Frozen II</h5>
                        <p>Elsa tiene un poder extraordinario: es capaz de crear hielo y nieve. Después de oír una voz misteriosa, Elsa, acompañada por sus amigos, viaja a los bosques embrujados y los mares oscuros que se extienden más allá de los límites de su reino para descubrir quién es en realidad.</p>
                        <img src="images/proveedores/Disney+/peliculas/frozen2.jpg" alt="Frozen II" />
                    </li>
                    <li className="serieopeli">
                        <h5>Mulan</h5>
                        <p>Mulán es una chica joven y valiente que vive en una aldea. Su padre está enfermo pero a pesar de ello quiere luchar por su país. Mulán no lo va a consentir y se fugará de casa con la intención de hacerse pasar por un chico y combatir en lugar de su padre.</p>
                        <img src="images/proveedores/Disney+/peliculas/mulan.jpg" alt="Mulan" />
                    </li>
                    <li className="serieopeli">
                        <h5>Soul</h5>
                        <p>Un profesor de música que ha perdido la pasión se transporta fuera de su cuerpo al "Gran Antes" y debe encontrar el camino de regreso con la ayuda de un alma infantil que aprende sobre sí misma.</p>
                        <img src="images/proveedores/Disney+/peliculas/soul.jpg" alt="Soul" />
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default ContenidoDisneyPage;
