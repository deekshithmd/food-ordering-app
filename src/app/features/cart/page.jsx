'use client'
import { ProductCard } from "@/components/ProductCard"
import { useData } from "@/contexts/DataContext"
import RequiresAuth from "@/components/RequireAuth"
import "./cart.css"

const Cart = () => {
    const { cart, restaurant } = useData()
    return (
        <RequiresAuth>
            <div className="products">
                <h1>Cart Items</h1>
                {
                    cart?.length > 0 ? <div className="product-list">
                        {
                            cart?.map((item) => {
                                return (
                                    <ProductCard key={item.id} product={item} />
                                )
                            })
                        }
                    </div> : <h1>No items added</h1>
                }
            </div>
        </RequiresAuth>
    )
}

export default Cart