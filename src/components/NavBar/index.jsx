import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo_petshop.png'
import GrCart from '../CartWidget/index'


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark vw-100">
            <Link to={"/"} className="navbar-brand p-0"><img src={logo} alt="logo" style={{ width: 80 }} /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav text-center">
                    <li className="nav-item active">
                        <Link to={"/"} className="nav-link">Inicio<span className="sr-only">(current)</span></Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to={"/products"} className="nav-link">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link">Galería</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link">Contacto</Link>
                    </li> */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to={"/products/all"} className="dropdown-item">Todo</Link>
                            <Link to={"/products/electronics"} className="dropdown-item">Electrónica</Link>
                            <Link to={"/products/jewelery"} className="dropdown-item">Joyería</Link>
                            <Link to={"/products/men's clothing"} className="dropdown-item">Ropa de Hombre</Link>
                            <Link to={"/products/women's clothing"} className="dropdown-item">Ropa de Mujer</Link>
                        </div>
                    </li>
                </ul>
                <div className='text-center my-2'><GrCart /></div>
            </div>
        </nav>
    )
}

export default NavBar;