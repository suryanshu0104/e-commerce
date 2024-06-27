
import React, { useEffect, useState } from 'react'
import './NewCollections.css'
// import new_collection from '../assets/new_collections' <- Seems unnecessary based on your code.
import Item from '../Item/Item'

const NewCollections = () => {
    const [newCollection, setNewCollection] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/newcollections')  // Corrected 'hhtp' to 'http'
        .then(response => response.json())
        .then(data => setNewCollection(data))
        .catch(error => console.error('Error fetching new collections:', error)); // Added error handling
    }, []);

    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="collections">
                {newCollection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    );
}

export default NewCollections;
