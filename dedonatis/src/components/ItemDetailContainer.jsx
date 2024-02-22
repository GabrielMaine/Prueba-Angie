import { useEffect, useState } from "react";
//import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Error404 from "./Error404";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "./Loading";


const ItemDetailContainer = () => {

    const [item, setItem]=useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    /*useEffect (() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                let producto = arrayProductos.find(item => item.id ===parseInt(id));
                resolve(producto);
            }, 500);
    })

    promesa.then(data => {
        setItem(data);
    })

    }, [id]);*/

    // Llamada del Producto desde el Firestore
    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setLoading(false);
            setItem({id:resultado.id, ...resultado.data()});
        });
    }, [id]);

    return (
        <>
            {loading ? (<Loading />) : (item.title ? (<ItemDetail item={item} />) : (<Error404 />))}
        </>
    )
}

export default ItemDetailContainer;
