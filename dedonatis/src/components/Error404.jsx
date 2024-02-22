import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1>Error 404</h1>
                    <div className="alert alert-danger my-4" role="alert">
                        La página que estás buscando no existe 🍽
                    </div>
                    <Link to={"/"} className="btn btn-warning btn-lg my-5">Volver al Inicio</Link>
                </div>
            </div>
        </div>
    );
}

export default Error404;
