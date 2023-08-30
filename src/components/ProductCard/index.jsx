import Image from "next/image"
import "./product.css"
import { useData } from "@/contexts/DataContext"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"

export const ProductCard = ({ product }) => {
    const { cart, setCart, favourites, setFavourites } = useData()
    const { isLoggedIn } = useAuth();
    const router = useRouter();

    const handleAddCart = (item) => {
        if (isLoggedIn) {
            if (!cart.some(i => i.id === item.id)) {
                setCart(prev => [...prev, item])
            }
            else {
                setCart(cart.filter(i => i.id !== item.id))
            }
        }
        else {
            router.push('/auth/login')
        }
    }

    const handleAddFavourites = (item) => {
        if (isLoggedIn) {
            if (!favourites.some(i => i.id === item.id)) {
                setFavourites(prev => [...prev, item])
            }
            else {
                setFavourites(favourites.filter(i => i.id !== item.id))
            }
        } else {
            router.push('/auth/login')
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