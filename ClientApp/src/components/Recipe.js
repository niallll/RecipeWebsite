import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import MovieImageArr from './MovieImages';

const Recipe = () => {
    const {id} = useParams();

    const [recipe, setRecipe] = useState(null);
    const dataType = 100;

    useEffect(() => {
        fetch(`recipe/${id}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                console.log(data);
                console.log(data[0]);
                setRecipe(data[0]);
            })
            .catch(e => { console.log(e); })
    }, []);


    return (
        <main>
            {recipe != null ? 
            <div>            
                <h2>{recipe.title}</h2>

                <img src={MovieImageArr.find(o => o.id === recipe.imageId)?.image} alt={recipe.title} className='recipe-img'/>
                <div className='recipe-info-boxes'>
                    <div className='recipe-preview-price-wrapper'>
                        <div className='recipe-preview-price'>
                            {recipe.calories}Kcal
                        </div>
                    </div>

                    <div className='recipe-preview-time-wrapper'>
                        <div className='recipe-preview-time'>
                            {recipe.time} mins
                        </div>
                    </div>
                </div>
                {/* <p>{recipe.description}</p> */}
                <h2 style={{borderTop: "3px solid #7768fc94"}}>Ingredients</h2>
{/*                 <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h2>Instructions</h2>
                <ol>
                    {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                    ))}
                </ol> */}
            </div>


            : <div>Loading...</div>}
        </main>
    ) 
}
export default Recipe;