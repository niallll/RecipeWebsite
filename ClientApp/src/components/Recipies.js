import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Recipies = () => {

    const [items, setItems] = useState(null);
    const dataType = 100;

    useEffect(() => {
        fetch(`recipe`)
            .then((results) => {

                return results.json();
            })
            .then(data => {
                setItems(data);
            })
            .catch(e => { console.log(e); })
    }, []);

    return (
        <main>
            <h2>Recipes</h2>
            {
                (items != null) ?
                    items.map((items) => (
                        <div style={{width: '40%'}}>
                            <Link to={`/recipe/${items.id}`} style={{ textDecoration: 'none'}}>
                                <div className='recipe-preview'>
                                    <h3>{items.title}</h3>
                                    <p>Calories: {items.calories}</p>
                                    <p>Time: {items.time}</p>

                                </div>
                            </Link>
                        </div>

                    ))
                    :
                    <div>Loading...</div>
            }
        </main>
    )
}
export default Recipies;