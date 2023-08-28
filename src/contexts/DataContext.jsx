'use client'
import React, { useContext, createContext, useState } from "react";

const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
    const [restaurant, setRestaurant] = useState(null);
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([]);
    const [favourites, setFavourites] = useState()
    return (
        <DataContext.Provider value={{ restaurant, items, setRestaurant, setItems, cart, setCart, favourites, setFavourites }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)

