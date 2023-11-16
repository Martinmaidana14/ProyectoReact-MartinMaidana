import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Celulares</button>
                <button>Auriculares</button>
                <button>Notebooks</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar