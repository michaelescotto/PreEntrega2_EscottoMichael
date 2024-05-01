const Item = ({item}) => {
    return (
        <>
            <div className="col-md-4 text-center">
                <div className="card border-0">
                    <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text fw-bold">${item.precio}</p>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Item