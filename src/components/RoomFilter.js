import React from 'react'
import {useContext} from "react"
import {RoomContext} from "../context"
import Title from "../components/Title"

const getUnique = (item,value)=>{
    return [...new Set(item.map(item=>item[value]))]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    }= context
    
    let types=getUnique(rooms, 'type')
    types=['all',...types]
    types=types.map((item,index)=>{
    return <option value={item} key={index}>{item}</option>
    })
    let people= getUnique(rooms, 'capacity')
    people=people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search drawings"/>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">drawing type</label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type} 
                        className="form-control" 
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Prints available</label>
                    <select 
                        name="capacity" 
                        id="capacity" 
                        value={capacity} 
                        className="form-control" 
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">original price ${price}</label>
                    <input 
                        type="range"
                        name="price" 
                        min={minPrice}
                        max={maxPrice} 
                        id="price"
                        value={price} 
                        className="form-control" 
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="size">Print Size</label>
                    <div className="size-inputs">
                        <input 
                            type="number"
                            name="minSize" 
                            id="size" 
                            value={minSize} 
                            className="size-input" 
                            onChange={handleChange}
                        />
                        <input 
                            type="number"
                            name="maxSize" 
                            id="size" 
                            value={maxSize} 
                            className="size-input" 
                            onChange={handleChange}
                        />
                    </div>                
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                            type="checkbox" 
                            name="breakfast" 
                            id="breakfast" 
                            checked={breakfast} 
                            onChange={handleChange}
                        />
                        <label htmlFor='breakfast'>Prints Available</label>
                    </div>
                    <div className="single-extra">
                        <input 
                            type="checkbox" 
                            name="original available" 
                            id="pets" 
                            checked={pets} 
                            onChange={handleChange}
                        />
                        <label htmlFor='pets'>Original Available</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
