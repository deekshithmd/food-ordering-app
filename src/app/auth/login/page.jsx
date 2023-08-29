'use client'
import "./login.css"
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function Login() {
    const { setIsLoggedIn } = useAuth()
    const router = useRouter()

    const handleLogin = (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        if (username === 'deekshith' && password === "deekshith") {
            setIsLoggedIn(true);
            router.push('/')
        }
    }

    return (
        <div className='container'>

            <form onSubmit={handleLogin} className='login-form'>
                <h2>Login</h2>
                <label htmlFor='username'>
                    <input type='text' name='username' />
                </label>
                <label htmlFor='password'>
                    <input type='password' name='password' />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
