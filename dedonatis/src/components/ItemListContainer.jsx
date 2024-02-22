import { useState } from "react";
//import arrayProductos from "./json/productos.json";
import { useEffect } from "react";
import ItemList from "./ItemList";
import  ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import Loading from "./Loading";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    
    // Llamada de productos desde el Json

    /*useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve (id ? arrayProductos.filter(item => item.categoria === id): arrayProductos);
            }, 500);
        })
        promesa.then(data => {
            setItems(data);
        })
    }, [id]);*/

     // Subida de Productos a Firestore
    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        arrayProductos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });

        console.log("Los productos se subieron correctamente!");
    }, [])*/

    // Llamada de Productos desde el Firebase
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
}, [id]);


    return (
        <>
            {loading ? <Loading /> : <ItemList items={items} />}          
        </>
    )
}

export default ItemListContainer;
