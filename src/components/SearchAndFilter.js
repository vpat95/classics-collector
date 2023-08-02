import React from 'react'

function SearchAndFilter(){
    return (
        <>
            <label htmlFor="search"> Search </label>
            <input name='search' type='text'></input>
            <label htmlFor="price"> Filter by Price </label>
            <select name='price'>
                <option>Under 100,000</option>
                <option>Under 50,000</option>
                <option>Under 25,000</option>
                <option>Under 10,000</option>
            </select>
            <label htmlFor='stock'> Sale Pending </label>
            <input name='stock' type='checkbox'></input>
        </>
    )
}

export default SearchAndFilter