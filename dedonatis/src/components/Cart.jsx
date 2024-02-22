import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import Trash from "../assets/trash.svg";

const Cart = () => {
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);
    if (CantTotalProductos() == 0) {
        return (
            <div className="container p-5">
                <div className="row">
                    <div className="col text-center">
                        <p className="display-2">🍕</p>
                        <div className="alert alert-danger" role="alert">No se encontraron productos seleccionados</div>
                        <Link to={"/"} className="btn btn-warning my-5">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container" style={{ padding: '15vh'}}>
                <div className="row">
                    <div className="col text-center">
                        <h1>Productos Seleccionados</h1>
                    </div>
                </div>
                <div className="row" style={{ padding: '6vh'}}>
                    <div className="col">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td colSpan={5}></td>
                                    <td className="text-center"><a href="#" onClick={clear} className="btn btn-warning">Vaciar Carrito <img src={Trash} alt="Eliminar Producto" title="Eliminar Producto" /></a></td>
                                </tr>
                                {cart.map(product =>
                                    <tr className="text-center" key={product.id}>
                                        <td><img src={product.image} alt={product.title} width={80} /></td>
                                        <td>{product.title}</td>
                                        <td>${product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>${product.quantity * product.price}</td>
                                        <td><a href="#" onClick={() => {removeItem(product.id)}}><img src={Trash} alt="Eliminar Producto" title="Eliminar Producto"  /></a></td>
                                    </tr>
                                )}
                                <tr className="text-center">
                                    <td></td>
                                    <td className="text-start align-middle">Total</td>
                                    <td className="text-start align-middle">${SumaTotalProductos()}</td>
                                    <td colSpan={2}></td>
                                    <td className="text-end align-middle"><Link to={"/checkout"} className="btn btn-warning">Finalizar</Link></td>                          
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Cart;

