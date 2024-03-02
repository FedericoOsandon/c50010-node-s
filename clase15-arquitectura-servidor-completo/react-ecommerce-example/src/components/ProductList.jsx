import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
    return (
        <div className="d-flex d-row justify-content-center align-itmes-center">
            { products.map( product => <ProductCard key={product._id} product={product} /> )}
        </div>
    )
}
