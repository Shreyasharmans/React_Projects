import React from 'react';
import './card-style.css'

function Card({user}) {
    return (
        <div className='card-container'>
            <img style={{width: "200px", height: "200px"}} src={`https://robohash.org/${user.id}?set=set2?size=120x120`} alt='user' />
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    )
}

export default Card;