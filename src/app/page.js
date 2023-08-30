"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RequiresAuth from "@/components/RequireAuth";
import { useData } from "@/contexts/DataContext";

export default function Home() {
  const { setRestaurant, restaurants } = useData();
  const router = useRouter();

  return (
    <RequiresAuth>
    <main className={styles.main}>
      <h1 className={styles.heading}>Restaurants</h1>
      <div className={styles.home_page}>
        {restaurants?.map((restaurant) => {
          return (
            <div
              className={styles.restaurant}
              key={restaurant?.id}
              onClick={() => {
                setRestaurant(restaurant);
                router.push("/features/products");
              }}
            >
              <h2>{restaurant?.restaurant}</h2>
              <Image
                src={restaurant?.image}
                height={100}
                width={200}
                alt="restaurant"
              />
            </div>
          );
        })}
      </div>
    </main>
    </RequiresAuth>
  );
}
