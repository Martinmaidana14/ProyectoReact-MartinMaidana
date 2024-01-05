import '../NavBar/NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">


                <Link to='/' className="navbar-item" href="https://bulma.io">

                    <img src='./SRMaidana.png'  width="180" height="28"/>
                </Link>

            </div>

            <div id="navbarBasicExample" className="navbar-menu">

                <div className="navbar-start Categories">
                    <ul className="navbar-start">
                        <li className="navbar-item">

                            <NavLink to={`/category/celular`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>

                            <NavLink to={`/category/tablet`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>

                            <NavLink to={`/category/notebook`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>

                        </li>

                    </ul>
                </div>


                <div className="navbar-end">
                    <div className="navbar-item">

                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                            <a className="button is-light">
                                <CartWidget />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;



/*
<nav>
<h3>Ecommerce</h3>
<div>
    <button>Celulares</button>
    <button>Auriculares</button>
    <button>Notebooks</button>

    <li className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
            More
        </a>
        <div className="navbar-dropdown">
            <a className="navbar-item">
                About
            </a>
            <a className="navbar-item">
                Jobs
            </a>
            <a className="navbar-item">
                Contact
            </a>
            <hr className="navbar-divider"/>
            <a className="navbar-item">
                Report an issue
            </a>
        </div>
    </li>

</div>
<CartWidget />
</nav>
*/

/*
<div>

    <ul class="centerBar">

        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./pages/servicios.html">Servicios</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./pages/quienes somos.html">Quienes Somos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./pages/contacto.html">Contacto</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./pages/clientes.html">Clientes</a>
        </li>
    </ul>

</div>


*/