"use client";
import React, { useEffect } from "react";
import "./filter.css";
import { useData } from "@/contexts/DataContext";
import RequiresAuth from "../RequireAuth";

export const Filters = () => {
    const { filters, setFilters, setFilteredData, restaurant } =
        useData();

    useEffect(() => {
        setFilteredData(restaurant?.itmes);
        const filter1 = [];
        for (let value of restaurant?.itmes) {
            if (filters.includes(value?.season)) {
                filter1.push(value);
            }
        }
        const filter2 = [];
        for (let value of restaurant?.itmes) {
            if (filters.includes(value?.dietry) && !filter1?.some(v => v.dietry === value?.dietry)) {
                filter1.push(value);
            }
        }

        const filter3 = [];
        for (let value of restaurant?.itmes) {
            if (filters.includes(value?.type) && !filter1?.some(v => v.type === value?.type)) {
                filter1.push(value);
            }
        }

        const finalFilteredData = [...filter1, ...filter2, ...filter3]

        finalFilteredData?.length > 0 ? setFilteredData(finalFilteredData) : null

    }, [filters]);

    const handleFilterChange = (e, value) => {
        if (e.target.checked) {
            setFilters(prev => [...prev, value])
        }
        else {
            const updatedFilters = filters.filter(v => v !== value)
            setFilters(updatedFilters)
        }
    }

    return (
        <RequiresAuth>
            <div className="filter-container">
                <h1>Food filters</h1>
                <button onClick={() => setFilters([])}>Clear All Filters</button>
                <div className="filter-section">
                    <h1>Season</h1>
                    <label htmlFor="item-1">
                        Summer
                        <input type="checkbox" name="item-1" checked={filters?.includes('Summer')} onChange={(e) => handleFilterChange(e, 'Summer')} />
                    </label>
                    <label htmlFor="item-1">
                        Winter
                        <input type="checkbox" name="item-1" checked={filters?.includes('Winter')} onChange={(e) => handleFilterChange(e, 'Winter')} />
                    </label>
                    <label htmlFor="item-1">
                        Spring
                        <input type="checkbox" name="item-1" checked={filters?.includes('Spring')} onChange={(e) => handleFilterChange(e, 'Spring')} />
                    </label>
                </div>
                <div className="filter-section">
                    <h1>Dietry</h1>
                    <label htmlFor="item-1">
                        Egg Free
                        <input type="checkbox" name="item-1" checked={filters?.includes('Egg_Free')} onChange={(e) => handleFilterChange(e, 'Egg_Free')} />
                    </label>
                    <label htmlFor="item-1">
                        Gluten Free
                        <input type="checkbox" name="item-1" checked={filters?.includes('Gluten_Free')} onChange={(e) => handleFilterChange(e, 'Gluten_Free')} />
                    </label>
                    <label htmlFor="item-1">
                        Dairy Free
                        <input type="checkbox" name="item-1" checked={filters?.includes('Dairy_Free')} onChange={(e) => handleFilterChange(e, 'Dairy_Free')} />
                    </label>
                </div>
                <div className="filter-section">
                    <h1>Type</h1>
                    <label htmlFor="item-1">
                        Dinner
                        <input type="checkbox" name="item-1" checked={filters?.includes('Dinner')} onChange={(e) => handleFilterChange(e, 'Dinner')} />
                    </label>
                    <label htmlFor="item-1">
                        Breakfast
                        <input type="checkbox" name="item-1" checked={filters?.includes('Breakfast')} onChange={(e) => handleFilterChange(e, 'Breakfast')} />
                    </label>
                    <label htmlFor="item-1">
                        Dessert
                        <input type="checkbox" name="item-1" checked={filters?.includes('Dessert')} onChange={(e) => handleFilterChange(e, 'Dessert')} />
                    </label>
                </div>
            </div>
        </RequiresAuth>
    );
};
