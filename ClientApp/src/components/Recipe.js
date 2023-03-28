import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import MovieImageArr from './MovieImages';
import { ListGroup } from 'react-bootstrap';

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
                setRecipe(data[0]);
            })
            .catch(e => { console.log(e); })
    }, []);


    return (
        <main>
            {recipe != null ? 
            <div>            
                <h2>{recipe.title}</h2>

                <div style={{display:"flex", marginBottom:"40px"}}>   

                    <img src={MovieImageArr.find(o => o.id === recipe.imageId)?.image} alt={recipe.title} className='recipe-img'/>
                    <div style={{position:"relative"}}>
                        <div>{recipe.description}</div>

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
                        
                    </div>


                </div>

                <div className='recipe-ingredient-instructions'>
                    <div>
                        <h2>Ingredients</h2>
                        <ul className='my-list'>
                            {recipe.ingredients != null && 
                            recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='list-instructions-wrapper'>
                        <h2>Instructions</h2>
                        <ol className='list-instructions'>
                            {recipe.instructions && recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </div>



            </div>


            : <div>Loading...</div>}
        </main>
    ) 
}
export default Recipe;