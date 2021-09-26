import '../styles/components/pages/SeriesyPelisPage.css';

const ContenidoAmazonPage = (props) => {
    return (
        <main className="holder">
            <div className="prov">
                <img src="images/proveedores/Amazon/primeVideo_cartel.png" alt="Amazon Prime Video" />
            </div>
            <h2>Series</h2>
            <div className="provseriepeli">
                <ul>
                    <li className="serieopeli">
                        <h5>Cruel Summer</h5>
                        <p>Cruel Summer se ambienta a lo largo de tres veranos en la década de los 90, en el que una popular adolescente desaparece, haciendo que una chica sin aparente relación con ella, pase a ser la más popular de la ciudad.</p>
                        <img src="images/proveedores/Amazon/series/cruelsummer.jpg" alt="Cruel Summer" />
                    </li>
                    <li className="serieopeli">
                        <h5>HomeComing</h5>
                        <p>Homecoming es un drama que cuenta la historia de Heidi Bergman, una trabajadora de una agencia secreta gubernamental que ayuda a soldados a retomar su vida normal tras pasar varios años en la guerra.</p>
                        <img src="images/proveedores/Amazon/series/homecoming.jpg" alt="HomeComing" />
                    </li>
                    <li className="serieopeli">
                        <h5>Solos</h5>
                        <p>Solos cuenta siete historias totalmente independientes que invitan a reflexionar al explorar el significado más profundo de la conexión humana a través de la visión única e individual de sus protagonistas.</p>
                        <img src="images/proveedores/Amazon/series/solos.jpg" alt="Solos" />
                    </li>
                    <li className="serieopeli">
                        <h5>The L Word</h5>
                        <p>The L Word retrata la vida, las aventuras y desventuras de un grupo de mujeres lesbianas, sus amigas, familias y amantes, en Los Ángeles - Ciudad de West Hollywood, California.</p>
                        <img src="images/proveedores/Amazon/series/thelword.jpg" alt="The L Word" />
                    </li>
                    <li className="serieopeli">
                        <h5>The Wilds</h5>
                        <p>Un grupo de adolescentes de diferentes orígenes debe luchar por la supervivencia después que un accidente de avión las dejó varadas en una isla desierta.</p>
                        <img src="images/proveedores/Amazon/series/thewilds.jpg" alt="The Wilds" />
                    </li>
                </ul>
            </div>
            <h2>Películas</h2>
            <div class="provseriepeli">
                <ul>
                    <li className="serieopeli">
                        <h5>GreenLand</h5>
                        <p>Una familia emprende un viaje para encontrar un refugio seguro cuando un gran cometa arremete contra la Tierra. A medida que el apocalipsis se acerca, la increíble travesía termina en una batalla para llegar a puerto seguro.</p>
                        <img src="images/proveedores/Amazon/peliculas/greenland.jpg" alt="GreenLand" />
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default ContenidoAmazonPage;
