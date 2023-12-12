import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">

            <div class="navbar-brand">


                <a class="navbar-item" href="https://bulma.io">

                    <img src='./SRMaidana.png' width="180" height="28"/>
                </a>

            </div>

            <div id="navbarBasicExample" class="navbar-menu">

                <div class="navbar-start">
                    <ul class="navbar-start">
                        <li class="navbar-item">

                            <a class="navbar-item nav-link active">
                                Home
                            </a>
                        </li>
                        <li class="navbar-item">
                            <a class="navbar-item">
                                Quienes Somos
                            </a>

                        </li>
                        <li class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                More
                            </a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    About
                                </a>
                                <a class="navbar-item">
                                    Jobs
                                </a>
                                <a class="navbar-item">
                                    Contact
                                </a>
                                <hr class="navbar-divider"/>
                                <a class="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>


                <div class="navbar-end">
                    <div class="navbar-item">

                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                Log in
                            </a>
                            <a class="button is-light">
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
</div>
<CartWidget />
</nav>
*/

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