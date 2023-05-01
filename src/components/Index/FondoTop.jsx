import "./FondoTop.css"


export default function FondoTop(ContenidoTop) {
    
    return (
        <div className={ContenidoTop.about ? 'about-us section-top' : 'section-top'} id="inicio">
            <div className="conteniner-top">
                <div className='img-top'>
                    <img src={ContenidoTop.img} alt="" />
                </div>
                <div className='contenido'>
                    <h2>{ContenidoTop.titulo}</h2>
                    <p>{ContenidoTop.descripcion}</p>

                    <a href="#" className='btn-text btn-leer-mas'>Leer Más-{">"}</a>
                </div>

                <div>
                    {ContenidoTop.redes ? 
                    <div className="redes-sociales">
                        <i className="lab la-facebook-square face"></i>
                        <i className="lab la-instagram insta"></i>
                        <i className="lab la-twitter twit"></i>
                    </div>
                    :''}
				</div>
            </div>
        </div>
    )
}
