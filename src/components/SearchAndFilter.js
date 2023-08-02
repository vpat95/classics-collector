import React,{useState} from 'react'

function SearchAndFilter(){
    const [formData, setFormData] = useState({
        search: "",
        maxPrice: "All",
        inStock: false
    })

    function handleChange(e){
        const key = e.target.id
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }

    return (
        <>
            <label htmlFor="search"> Search </label>
            <input id="search" onChange={handleChange} name='search' type='text' value={formData.search}></input>
            <label htmlFor="price"> Filter by Price </label>
            <select id="maxPrice" onChange={(e) => setFormData({...formData, maxPrice:e.target.value})} name='price' value={formData.maxPrice}>
                <option value='All'>All</option>
                <option value={'under100k'}>Under 100,000</option>
                <option value={'under50k'}>Under 50,000</option>
                <option value={'under25k'}>Under 25,000</option>
                <option value={'under10k'}>Under 10,000</option>
            </select>
            <label htmlFor='stock'> Remove Sale Pending </label>
            <input id="inStock" name='stock' type='checkbox' onChange={(e) => setFormData({...formData, inStock:e.target.checked})} checked={formData.inStock}></input>
        </>
    )
}

export default SearchAndFilter