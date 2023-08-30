'use client'
import { ProductCard } from "@/components/ProductCard"
import { useData } from "@/contexts/DataContext"
import RequiresAuth from "@/components/RequireAuth"
import "./favourites.css"

const Favourites = () => {
    const { favourites, restaurant } = useData()
    return (
        <RequiresAuth>
            <div className="products">
                <h1>Favourite Items</h1>
                {
                    favourites?.length > 0 ? <div className="product-list">
                        {
                            favourites?.map((item) => {
                                return (
                                    <ProductCard key={item.id} product={item} />
                                )
                            })
                        }
                    </div> : <h1>No Items added</h1>
                }
            </div>
        </RequiresAuth>
    )
}

export default Favourites