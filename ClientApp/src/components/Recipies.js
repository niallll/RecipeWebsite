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
            {
                (items != null) ? items.map((items) => <Link to="/">{items.title}</Link>): <div>Loading...</div>
            }
        </main>
    ) 
}
export default Recipies;