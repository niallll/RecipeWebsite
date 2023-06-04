import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieImageArr from './MovieImages';
import { Button } from 'reactstrap';

const Recipe = () => {
    const { id } = useParams();

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`recipe/${id}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setRecipe(data);
            })
            .catch(e => { console.log(e); })
    }, [id]);


    return (
        <main>
            {recipe != null ?
                <div>
                    <h2>{recipe.title}</h2>

                    <div style={{ display: "flex", marginBottom: "40px" }}>

                        <img src={MovieImageArr.find(o => o.id === recipe.imageId)?.image} alt={recipe.title} className='recipe-img' />
                        <div className='recipe-description-area'>
                            <div>{recipe.description}</div>

                            <div className='recipe-info-boxes'>
                                <div className='recipe-preview-price-wrapper'>
                                    <div className='recipe-preview-price'>
                                        {recipe.calories} Kcal
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
                                        <li key={index}>{ingredient.amount}{ingredient.unit} {ingredient.name}{(ingredient.amount > 1) & !ingredient.unit ? "s" : ""}</li>
                                    ))}
                            </ul>
                        </div>

                        <div className='list-instructions-wrapper'>
                            <h2>Instructions</h2>
                            <ol className='list-instructions'>
                                {recipe.instructions && recipe.instructions.sort((a, b) => a.stepNumber - b.stepNumber).map((instruction, index) => (
                                    <li key={index}>{instruction.instructionText}</li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    <div className='recipe-ingredient-instructions'>
                        <Link to={`/recipe-edit/${recipe.id}`} style={{ textDecoration: 'none' }}>
                            <Button color='warning'>Edit</Button>
                        </Link>
                    </div>

                </div>


                : <div>Loading...</div>}
        </main>
    )
}
export default Recipe;