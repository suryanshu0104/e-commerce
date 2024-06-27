import React, { useEffect, useState } from 'react'
import './Popular.css'
// import data_product from '../assets/data' // Commented out since it appears to be unused.
import Item from '../Item/Item'

const Popular = () => {
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/popularinwomen')
        .then(response => response.json())
        .then(data => setPopularProducts(data))
        .catch(error => console.error('Error fetching popular products:', error)); // Added error handling
    }, []); // Added an empty dependency array to ensure this runs only once.

    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {popularProducts.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    );
}

export default Popular;