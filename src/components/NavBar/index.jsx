import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo_petshop.png'
import GrCart from '../CartWidget/index'
import UserWidget from '../UserWidget';


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
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                            Productos
                        </div>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to={"/products/all"} className="dropdown-item">Todo</Link>
                            <Link to={"/products/cat"} className="dropdown-item">Gatos</Link>
                            <Link to={"/products/dog"} className="dropdown-item">Perros</Link>
                            <Link to={"/products/otros"} className="dropdown-item">Otros</Link>
                        </div>
                    </li>
                </ul>
                <div className='text-center my-2'><GrCart /></div>
                <div><UserWidget/></div>
            </div>
        </nav>
    )
}

export default NavBar;