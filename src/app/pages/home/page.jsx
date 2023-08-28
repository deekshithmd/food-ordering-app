'use client'
import { useData } from "@/contexts/DataContext"
import Image from "next/image"

const ItemsPage = () => {
    const { items } = useData()
    return (
        <div>
            {
                items?.itmes?.map(item => {
                    return (
                        <div key={item?.id}>
                            <h2>{item?.name}</h2>
                            <Image src={item?.image} height={100} width={200} alt="item" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemsPage