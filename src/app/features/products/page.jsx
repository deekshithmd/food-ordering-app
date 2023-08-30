'use client'
import { ProductCard } from "@/components/ProductCard"
import { useData } from "@/contexts/DataContext"
import RequiresAuth from "@/components/RequireAuth"
import "./products.css"

const Products = () => {
    const { restaurant, filteredData } = useData()
    return (
        <RequiresAuth>
            <div className="products">
                <h1>{restaurant?.restaurant}</h1>
                <div className="product-list">
                    {
                        (filteredData?.length > 0 ? filteredData : restaurant?.itmes)?.map((item) => {
                            return (
                                <ProductCard key={item.id} product={item} />
                            )
                        })
                    }
                </div>
            </div>
        </RequiresAuth>
    )
}

export default Products