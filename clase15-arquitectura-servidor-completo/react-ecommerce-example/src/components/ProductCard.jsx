
export default function ProductCard({product}) {
    return (
        <div className="card w-25 m-2">
            <img src={product.thumbnail} className="cart-img-top" alt="imagen de card" />
            <div className="card-body">
                <h3>{product.description}</h3>
                <h3>{product.price}</h3>
                <h3>{product.stock}</h3>
            </div>
            <div className="card-footer">
                <button className="btn  btn-outline-dark w-100">Detalle</button>
            </div>
        </div>
    )
}
