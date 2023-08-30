'use client'
import "./header.css"
import Cart from "../../assets/cart.png"
import Favourite from "../../assets/heart.png"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useData } from "@/contexts/DataContext"
import { useAuth } from "@/contexts/AuthContext"

export const Header = () => {
    const { cart, favourites, setCart, setFavourites } = useData()
    const { isLoggedIn, setIsLoggedIn } = useAuth()
    const router = useRouter();

    const handleLogout = () => {
        setIsLoggedIn(false);
        setCart([]);
        setFavourites([])
        router.push('/auth/login')
    }
    return (
        <nav>
            <h1 onClick={() => router.push('/')} className="logo">Food</h1>
            <div className="action-container">
                <span className="cart-btn" onClick={() => router?.push('/features/cart')}>
                    <Image src={Cart} height={20} width={20} alt="cart" />
                    <span className="badge">{cart?.length}</span>
                </span>
                <span className="favourite-btn" onClick={() => router?.push('/features/favourites')}>
                    <Image src={Favourite} height={20} width={20} alt="favourite" />
                    <span className="badge">{favourites?.length}</span>
                </span>
                <button onClick={() => handleLogout()}>{isLoggedIn ? 'Logout' : 'Login'}</button>
            </div>
        </nav>
    )
}