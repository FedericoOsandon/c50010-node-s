import { useEffect, useState } from "react"
import ProductList from "./ProductList"

export default function ProductListPage() {
    const [products, setProducts] = useState([])
    

    const getProducts = async () => {
        const dataJson = await fetch('http://localhost:8080/api/products')
        const data = await dataJson.json()
        // console.log(data)
        setProducts(data.payload)
    }

    useEffect(()=>{
        getProducts()
    }, [])


    console.log(products)
    return (
        <div>
            <ProductList products={products} />
        </div>
    )
}
