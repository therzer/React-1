import './Footer.css'

export default function Footer() {
    return (
        <div className='container-footer' id='footer'>
            <div className="contacto-h2">
                <h2>Contactanos</h2>
            </div>
            <div className="datos-contacto">
                <div className="redes">
                    <div>
                        <p>Email:</p>
                        <p>correo@gmail.com</p>
                    </div>
                    <div>
                        <p>Celular:</p>
                        <p>+54.011-2563987</p>
                    </div>
                    <div className="redes-sociales-footer">
                        <i className="lab la-facebook-square face"></i>
                        <i className="lab la-instagram insta"></i>
                        <i className="lab la-twitter twit"></i>
                    </div>
                </div>

                <div className="terminos">
                    <a href="">Terminos de Servicio</a>
                    <a href="">Politica de Privacidad</a>
                </div>
            
            </div>
        </div>
    )
}
