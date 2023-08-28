'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { restaurantData } from '@/config/restaurants'
import { useData } from '@/contexts/DataContext'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { setItems } = useData()
  const router = useRouter()
  return (
    <main className={styles.main}>
      {
        restaurantData?.map(restaurant => {
          return (
            <div key={restaurant?.id} onClick={() => { setItems(restaurant); router.push('/pages/home') }}>
              <h2>{restaurant?.restaurant}</h2>
              <Image src={restaurant?.image} height={100} width={200} alt="restaurant" />
            </div>
          )
        })
      }
    </main>
  )
}
