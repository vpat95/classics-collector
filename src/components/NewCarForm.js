import React,{useState} from 'react'

function NewCarForm(){
    const [formData, setFormData] = useState({
        make: "",
        model: "",
        year: "",
        price: "",
        image: "",
        specs: {
            hp: "",
            drivetrain: "awd",
            transmission: "manual"
        }
    })
    
    function handleChange(e){
        if (e.target.id === 'hp' || e.target.id === 'drivetrain' || e.target.id ==='transmission'){
            const key = (e.target.id)
            setFormData({
                ...formData,
                specs:{...formData.specs, [key]: e.target.value}
            })
        }
        else {
        const key = (e.target.id)
        setFormData({
            ...formData,
            [key] : e.target.value
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div className='new-car-form'>
            <h3>List New Vehicle</h3>
            <form onSubmit={handleSubmit} name='new-car'>
                <label htmlFor='make'>Make</label>
                <input onChange={handleChange} value={formData.make} type='text' name='make' id='make'></input>
                <label htmlFor='model'> Model </label>
                <input onChange={handleChange} value={formData.model} type='text' name='model' id='model'></input>
                <label htmlFor='year'> Year </label>
                <input onChange={handleChange} value={formData.year} type='text' name='year' id='year'></input>
                <label htmlFor='price'> Price </label>
                <input onChange={handleChange} value={formData.price} type='text' name='price' id='price'></input>
                <label htmlFor='image'> Image URL </label>
                <input onChange={handleChange} value={formData.image} type='text' name='image' id='image'></input>
                <label htmlFor='hp'> Horsepower </label>
                <input onChange={handleChange} value={formData.specs.hp} type='text' name='hp' id='hp'></input>
                <label htmlFor='drivetrain'> Drivetrain </label>
                <select onChange={handleChange} value={formData.specs.drivetrain} name='drivetrain' id='drivetrain'>
                    <option id='awd' name='awd'>awd</option>
                    <option id='rwd' name='rwd'>rwd</option>
                    <option id='fwd' name='fwd'>fwd</option>
                </select>
                <label onChange={handleChange} htmlFor='transmission'> Transmission </label>
                <select onChange={handleChange} value={formData.specs.transmission} type='text' name='transmission' id='transmission'>
                    <option id='manual' name='manual'>manual</option>
                    <option id='automatic' name='automatic'>automatic</option>
                </select>
                <input type='submit' name='submit' id='submit'></input>
            </form>
        </div>
    )
}

export default NewCarForm