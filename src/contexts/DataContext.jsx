"use client";
import React, { useContext, createContext, useState } from "react";
import { restaurantData } from "@/config/restaurants";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState(restaurantData)
    const [restaurant, setRestaurant] = useState(restaurantData[0]);
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [filters, setFilters] = useState([]);
    const [filteredData, setFilteredData] = useState([])

    return (
        <DataContext.Provider
            value={{
                restaurant,
                items,
                setRestaurant,
                setItems,
                cart,
                setCart,
                favourites,
                setFavourites,
                filters,
                setFilters,
                filteredData,
                setFilteredData,
                restaurants,
                setRestaurants
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
