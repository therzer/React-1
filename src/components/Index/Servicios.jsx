import './Servicios.css'

const Servicios = () => {
    return (
        <div className='contenido-servicios' id='servicios'>
            <div className='descripcion-s'>
                <h2>Otros Servicios</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate natus reprehenderit, pariatur animi laboriosam reiciendis excepturi 
                </p>
                <a href="#"className='btn-s btn-leer-mas'>Leer Más-{">"}</a>
            </div>
            <div className="cards">
                <div className="card">
                    <i className="icon-s las la-rss"></i>
                    <h2>Titulo1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ea maiores eaque?</p>
                </div>
                <div className="card">
                    <i className="icon-s lab la-dev"></i>
                    <h2>Titulo2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente modi laudantium quia?</p>
                </div>
            </div>
        </div>
    )
}

export default Servicios
