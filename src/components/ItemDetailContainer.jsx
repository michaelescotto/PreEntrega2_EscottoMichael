import { useEffect, useState } from "react"
import arrayProductos from "./json/productos.json"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () =>{
    const [item, setItem] = useState([])


    useEffect(() =>{
        const promesa = new Promise (resolve => {
            setTimeout(() => {
                resolve(arrayProductos)
            }, 2000)
        })
        promesa.then(respuesta => {
            setItem(respuesta)
        })


    }, [])


    return (
        <>
            <div className="container">
                <div className="row m-4 text-center">
                    <ItemDetail item={item} />
                </div>
            </div>
        
        </>
    )
}

export default ItemDetailContainer