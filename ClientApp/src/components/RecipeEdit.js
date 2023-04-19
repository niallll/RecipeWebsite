import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import MovieImageArr from './MovieImages';
import axios from 'axios';
import RecipeEditTime from './RecipeEditTime';

const Recipe = () => {
    const { id } = useParams();

    const [recipe, setRecipe] = useState({
        title: '',
        calories: null,
        time: null,
        description: '',
        ingredients: [],
        instructions: []
    });

    const [newIngredient, setNewIngredient] = useState(false);

    const navigate = useNavigate();

    function EditClick() {
        axios.post(`recipe/${id}`, recipe)
            .then((response) => {
                console.log(response);
                navigate(`/recipe/${recipe.id}`);
            })
            .catch((error) => {
                console.log(error);
            });
    }

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

    const handleNewIngredientChange = (event) => {
        const { value } = event.target;
        setNewIngredient(value);
    }

    const handleNewIngredientSubmit = (event) => {
        setRecipe((prevState) => ({
            ...prevState,
            ['ingredients']: prevState['ingredients'].concat([newIngredient])
        }));
        setNewIngredient('');
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'ingredients':
                setRecipe((prevState) => ({
                    ...prevState,
                    [name]: prevState['ingredients']
                }));
                break;
            case 'instructions':
                setRecipe((prevState) => ({
                    ...prevState,
                    [name]: [value]
                }));
                break;
            default:
                setRecipe((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    return (
        <main>
            {recipe != null ?
                <div>
                    <input className='header-edit' defaultValue={recipe.title} name='title' onChange={handleInputChange}></input>

                    <div style={{ display: "flex", marginBottom: "40px" }}>
                        <img src={MovieImageArr.find(o => o.id === recipe.imageId)?.image} alt={recipe.title} className='recipe-img-edit' />
                        <div className='recipe-description-area'>
                            <textarea defaultValue={recipe.description} className="textarea" name='description' onChange={handleInputChange} />
                            <div className='recipe-info-boxes'>
                                <RecipeEditTime name='calories' text='Kcal' value={recipe.calories} handleInputChange={handleInputChange} />
                                <RecipeEditTime name='time' text='mins' value={recipe.time} handleInputChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    

                    <div className='recipe-ingredient-instructions'>
                        <div>
                            <h2>Ingredients</h2>
                            <ul className='my-list'>
                                {recipe.ingredients != null &&
                                    recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}><input defaultValue={ingredient} className='invisable-edit' id={'ingredients' + index} name='ingredients' onChange={handleInputChange} /></li>
                                    ))}
                                <li><input className='invisable-edit' name='title' id='new-ingredient' onChange={handleNewIngredientChange} value={newIngredient}/><button onClick={handleNewIngredientSubmit}>add ingredient</button></li>
                            </ul>
                        </div>

                        <div className='list-instructions-wrapper'>
                            <h2>Instructions</h2>
                            <ol className='list-instructions'>
                                {recipe.instructions && recipe.instructions.map((instruction, index) => (
                                    <li key={index}><input defaultValue={instruction} className='invisable-edit' name='instructions' onChange={handleInputChange} /></li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    <div className='recipe-ingredient-instructions'>
                        <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
                            <button className="edit-button">Cancel</button>
                        </Link>
                        <button className="edit-button" onClick={EditClick}>Save</button>
                    </div>

                </div>


                : <div>Loading...</div>}
        </main>
    )
}
export default Recipe;