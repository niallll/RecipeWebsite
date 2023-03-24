import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyImage from './MyImage';
import MovieImageArr from './MovieImages';

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
                        <div style={{width:"30%"}}>
                            <Link to={`/recipe/${items.id}`} style={{ textDecoration: 'none'}}>
                                <div className='recipe-preview' style={{backgroundImage:`url(${MovieImageArr.find(o=>o.id === items.imageId)?.image})`}}>
                                    <h3>{items.title}</h3>
                                    <p>Calories: {items.calories}</p>
                                    <p>Time: {items.time}</p>
                                    {console.log(items)}
                                    {console.log(items.imageId)}
                                    {console.log(MovieImageArr.find(o=>o.id === items.imageId))}
                                    {/* <img id={items.ImageId} src={MovieImageArr.find(o=>o.id === items.imageId)?.image}></img> */}
                                    {/* <MyImage id={items.id} /> */}
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