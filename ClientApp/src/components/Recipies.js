import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Recipies = () => {

    const [items, setItems] = useState(null);
    const dataType = 80;

    useEffect(() => {
        fetch(`recipe/${dataType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setItems(data);
            })
            .catch(e => {console.log(e);})
    }, []);

    return (
        <main>
            <h3>Recipes</h3>
            {
                (items != null) ? 
                items.map((items) => (
                <div>
                  <Link to="/">{items.title}</Link>
                  <p>Calories: {items.calories}</p>
                  <p>Time: {items.time}</p>
                </div>
                ))
                : 
                <div>Loading...</div>
            }
        </main>
    ) 
}
export default Recipies;