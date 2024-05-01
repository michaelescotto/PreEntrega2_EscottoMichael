const ItemListContainer = ({texto}) =>{
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center p-5">
                        <p className="fs-3">{texto}</p>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default ItemListContainer