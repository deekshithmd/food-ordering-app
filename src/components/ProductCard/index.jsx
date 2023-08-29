import Image from "next/image"
import "./product.css"
import { useData } from "@/contexts/DataContext"

export const ProductCard = ({ product }) => {
    const { cart, setCart, favourites, setFavourites } = useData()

    const handleAddCart = (item) => {
        if (!cart.some(i => i.id === item.id)) {
            setCart(prev => [...prev, item])
        }
        else {
            setCart(cart.filter(i => i.id !== item.id))
        }
    }

    const handleAddFavourites = (item) => {
        if (!favourites.some(i => i.id === item.id)) {
            setFavourites(prev => [...prev, item])
        }
        else {
            setFavourites(favourites.filter(i => i.id !== item.id))
        }
    }
    return (
        <div className="product-card">
            <span>{product?.name}</span>
            <Image src={product?.image} width={180} height={100} alt="product" />
            <span>{product?.type}</span>
            <span>{product?.dietry}</span>
            <span>{product?.season}</span>
            <button onClick={() => handleAddCart(product)} className="cart">{cart.some(i => i.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}</button>
            <button onClick={() => handleAddFavourites(product)} className="favourites">{favourites.some(i => i.id === product.id) ? 'Remove from Favourites' : 'Add to Favourite'}</button>
        </div>
    )
}