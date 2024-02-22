import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{ height: '10vh'}}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink className="display-2 navbar-brand text-warning" to={"/"}>Mascarpone 🍕</NavLink>
             <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link text-warning" to={"/"}>Productos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-warning" to={"/category/tradicionales"}>Tradicionales</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-warning" to={"/category/especiales"}>Especiales</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-warning" to={"/category/gourmet"}>Gourmet</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-warning" to={"/category/bebidas"}>Bebidas</NavLink>
                    </li>
                </ul>
            </div>
            <div className='ml-2'>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;
