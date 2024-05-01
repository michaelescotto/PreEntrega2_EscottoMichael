import Brand from '../assets/images/modarural.png'
import CartWidget from './CartWidget'
const NavBar = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-dark text-center text-white p-2'>
                    <div className="col text-center">
                        <a className="navbar-brand" href="#">
                            <img src={Brand} alt="Logo" width="250"></img>
                        </a>
                    </div>
                    <div className='container-fluid p-2'>
                        <div className='row bg-dark text-center text-white'>
                            <div className='col'>
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contacto</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Catálogo
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Ropa</a></li>
                                            <li><a class="dropdown-item" href="#">Calzado</a></li>
                                            <li><a class="dropdown-item" href="#">Sombreros</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-auto'>
                                <CartWidget />
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default NavBar