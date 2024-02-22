import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const {cart, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        generarOrden();
    }

    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const buyer = {name:nombre, email:email, phone:telefono};
        const items = cart.map(item => ({id:item.idx, title:item.title, price:item.price}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = SumaTotalProductos();
        const order = {buyer:buyer, items:items, date:date, total:total};

        // Inserto Documento en Firestore
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            clear();
            setOrderId(resultado.id);
        });
    }

    return (
        <div className="container">
            {SumaTotalProductos()>0 ? <>
            <div className="row">
                <div className="col text-center p-5">
                    <h1>Datos de Contacto</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input required type="text" className="form-control" placeholder="Nombre y Apellido" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input required type="email" className="form-control" placeholder="name@example.com" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input required type="number" className="form-control" placeholder="Phone Number" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="submit" className="btn btn-warning">Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6 text-center">
                    <table className="table">
                        <tbody>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td className="align-middle"><img src={product.image} alt={product.title} width={80} /></td>
                                    <td className="text-start align-middle">{product.title}</td>
                                    <td className="text-start align-middle">${product.price}</td>
                                    <td className="text-start align-middle">{product.quantity}</td>
                                    <td className="text-start align-middle">${product.quantity * product.price}</td>
                                </tr>
                            )}
                            <tr>
                                <td className="text-center align-middle" colSpan={4}>&nbsp;</td>
                                <td className="text-start align-middle">${SumaTotalProductos()}</td>
                            </tr>            
                        </tbody>
                    </table>
                </div>
            </div>
            </>
            : ""}
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div class="alert alert-warning p-5 text-center" role="alert">
                        <p className="display-1"></p>
                        <h1>Gracias por tu Compra!</h1>
                        <p>Tu ID de Compra es: <b>{orderId}</b></p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;