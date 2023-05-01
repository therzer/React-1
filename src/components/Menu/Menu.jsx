import "./Menu.css"
import Logo from "../../assets/logo.jpg"

export default function Menu() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='container-menu'>
                <a href="#inicio" className='link'>inicio</a>
                <a href="#servicios" className='link'>servicios</a>
                <a href="#footer" className='link'>contacto</a>
            </div>
        </div>
    )
}
