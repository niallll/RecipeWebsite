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
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {
                    (items != null) ?
                        items.map((items) => (
                            <div className='recipe-preview-wrapper'>
                                <Link to={`/recipe/${items.id}`} style={{ textDecoration: 'none' }}>
                                    <div className='recipe-preview' style={{ backgroundImage: `url(${MovieImageArr.find(o => o.id === items.imageId)?.image})` }}>
                                        <div className='recipe-preview-info-wrapper'>
                                            <h3>{items.title}</h3>
                                        </div>
                                        <div className='recipe-preview-info-boxes'>
                                            <div className='recipe-preview-price-wrapper'>
                                                <div className='recipe-preview-price'>
                                                    {items.calories}Kcal
                                                </div>
                                            </div>

                                            <div className='recipe-preview-time-wrapper'>
                                                <div className='recipe-preview-time'>
                                                    {items.time} mins
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            </div>

                        ))
                        :
                        <div>Loading...</div>
                }
            </div>
        </main>
    )
}
export default Recipies;