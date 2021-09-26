import '../styles/components/pages/SeriesyPelisPage.css';

const ContenidoStarZPage = (props) => {
    return (
        <main className="holder">
            <div className="prov">
                <img src="images/proveedores/starz/starZ_cartel.png" alt="Disney+" />
            </div>
            <h2>Series</h2>
            <div className="provseriepeli">
                <ul>
                    <li className="serieopeli">
                        <h5>Gangs of London</h5>
                        <p>Tras el asesinato del capo de la organización, el repentino vacío de poder que crea su muerte rompe con la frágil paz que rige la complicada red de bandas que dominan las calles de Londres.</p>
                        <img src="images/proveedores/starz/series/gangsoflondon.jpg" alt="Gangs of London" />
                    </li>
                    <li className="serieopeli">
                        <h5>MotherFatherSon</h5>
                        <p>Max posee uno de los imperios mediáticos más influyentes del mundo. Su negocio es la información: conoce los secretos más oscuros y usa su poder sin piedad, incluso contra su propia familia.</p>
                        <img src="images/proveedores/starz/series/motherfatherson.jpg" alt="MotherFatherSon" />
                    </li>
                    <li className="serieopeli">
                        <h5>The Stand</h5>
                        <p>The Stand es la visión de Stephen King de un mundo diezmado por una plaga y embarcado en una lucha elemental entre el bien y el mal. El destino de la humanidad está en las frágiles manos de la madre Abagail, de 108 años, y de un puñado de supervivientes.</p>
                        <img src="images/proveedores/starz/series/thestand.jpg" alt="The Stand" />
                    </li>
                </ul>
            </div>
            <h2>Películas</h2>
            <div class="provseriepeli">
                <ul>
                    <li className="serieopeli">
                        <h5>Blindspotting</h5>
                        <p>Blindspotting se sitúa en Oakland, donde vive la protagonista Ashley hasta que su novio y padre de su hijo es encarcelado y ella tiene que enfrentarse a una crisis existencial.</p>
                        <img src="images/proveedores/starz/peliculas/blindspotting.jpg" alt="Blindspotting" />
                    </li>
                    <li className="serieopeli">
                        <h5>Iron Man</h5>
                        <p>Capturado en Oriente Medio por un grupo de insurgentes, el industrial Tony Stark (Robert Downey Jr.) utilizará su ingenio para crear una armadura que le permita escapar.</p>
                        <img src="images/proveedores/starz/peliculas/ironman.jpg" alt="Iron Man" />
                    </li>
                    <li className="serieopeli">
                        <h5>Jumanji</h5>
                        <p>El misterioso y letal juego Jumanji reaparece más de veinte años después. Es la época actual, y cuatro adolescentes se introducen en esta nueva aventura, ahora a partir de un videojuego que sirve como un portal a través del espacio-tiempo.</p>
                        <img src="images/proveedores/starz/peliculas/jumanji.jpg" alt="Jumanji" />
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default ContenidoStarZPage;
