import React from 'react'

function SearchAndFilter({formData, setFormData}){


    function handleChange(e){
        const key = e.target.id
        setFormData({
            ...formData,
            [key]: e.target.value
        })

        
    }

    return (
        <div className='filter'>
            <label htmlFor="search"> Search </label>
            <input id="search" onChange={handleChange} name='search' type='text' value={formData.search}></input>
            <label htmlFor="price"> Max Price </label>
            <select id="maxPrice" onChange={(e) => setFormData({...formData, maxPrice:e.target.value})} name='price' value={formData.maxPrice}>
                <option value={Infinity}>All</option>
                <option value={100000}>{(100000).toLocaleString()}</option>
                <option value={50000}>{(50000).toLocaleString()}</option>
                <option value={25000}>{(25000).toLocaleString()}</option>
                <option value={5000}>{(5000).toLocaleString()}</option>
            </select>
            <label htmlFor='stock'> Remove Sale Pending </label>
            <input id="inStock" name='inStock' type='checkbox' onChange={(e) => setFormData({...formData, inStock:e.target.checked})} checked={formData.inStock}></input>
        </div>
    )
}

export default SearchAndFilter