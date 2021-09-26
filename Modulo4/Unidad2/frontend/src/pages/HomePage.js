import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/proveedores.jpg" alt="Provvedores de Contenido" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Nunca te pasó que quisiste ver una serie o película que alguien te recomendó y te desilusionaste porque no figuraba en el catálogo de tu proveedor de contenidos?</p>
                    <p>O cuándo tuviste que bucear entre decenas de resultados de búsqueda para encontrar el proveedor que pasaba la película que deseabas ver?</p>
                    <p>O deseparado por conocer el día de estreno de la nueva temporada de tu serie favorita?</p>
                    <p>series+películasYA apunta a dar respuestas a éstas y otras preguntas, reuniendo en un solo lugar la oferta de contenido de cada proveedor y ordenando el caos que produce la avalancha de estrenos que diariamente nos proponen los distribuidores de contenido.</p>
                    <p>Los invitamos a bajar la ansiedad y a no desperdiciar más tiempo en búsquedas innecesarias. Ahora toda la información de series y películas está en un solo lugar y a un click de sus consultas.</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Muy bueno!!!</span>
                        <span className="parrafo">Qué fácil me resultó encontrar quien pasaba Succession!!</span>
                        <span className="autor">Fernando Fernandez - La Plata, Bs. As.</span>
                        <span className="cita">Excelente!!!</span>
                        <span className="parrafo">Ya sé el día de estreno de la nueva temporada de Ozark!</span>
                        <span className="autor">Alvaro Alvarez - CABA</span>
                    </div>
                </div>  
            </div>
        </main>
    )
}

export default HomePage;
