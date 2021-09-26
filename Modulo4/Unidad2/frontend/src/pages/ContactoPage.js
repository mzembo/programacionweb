import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna left">
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="email" />
                    </p>
                    <p>
                        <label for="">Teléfono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="comentario">Comentario</label>
                        <textarea id="comentario"></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar"/></p>
                </form>
            </div>
            <div className="columna right">
                <h2>Otras vias de contacto</h2>
                <p>También se pueden comunicar con nosotros ...</p>
                <ul>
                    <li>Teléfono: +5491145229694</li>
                    <li>Email:contacto@series+peliculasya.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </main>
    )
}

export default ContactoPage;
