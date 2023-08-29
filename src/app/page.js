'use client'
import styles from './page.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import RequiresAuth from '@/components/RequireAuth'
import { useData } from '@/contexts/DataContext'

export default function Home() {
  const { setRestaurant, restaurants } = useData()
  const router = useRouter()

  return (
    <RequiresAuth>
      <main className={styles.main}>
        <div className={styles.home_page}>
          <button onClick={()=>router.push('/temp')}>Nav</button>
          {
            restaurants?.map(restaurant => {
              return (
                <div key={restaurant?.id} onClick={() => { setRestaurant(restaurant); router.push('/pages/productpage') }}>
                  <h2>{restaurant?.restaurant}</h2>
                  <Image src={restaurant?.image} height={100} width={200} alt="restaurant" />
                </div>
              )
            })
          }
        </div>
      </main>
    </RequiresAuth>
  )
}
