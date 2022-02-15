import React from 'react';
import './searchbox-style.css'

const Searchbox = ({placeholder, handleChange}) => {
    return (
        <input type='search' 
             placeholder={placeholder}
            onChange={handleChange} 
            className='search'
        />
    )
}

export default Searchbox;