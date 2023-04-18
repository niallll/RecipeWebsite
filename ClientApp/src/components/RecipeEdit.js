import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieImageArr from './MovieImages';
import { Button, ListGroup } from 'react-bootstrap';
import EditableLabel from './EditableLabel';
import axios from 'axios';

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

    const [isEditing, setIsEditing] = useState(false);

    function EditClick() {
        setIsEditing(!isEditing);
        axios.post(`recipe/${id}`, recipe)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function CancelClick() {
        setIsEditing(!isEditing);
        this.forceUpdate();
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
        const value = document.getElementById("new-ingredient").value;
        setRecipe((prevState) => ({
            ...prevState,
            ['ingredients']: prevState['ingredients'].concat([value])
        }));
        document.getElementById("new-ingredient").value = '';
        // event.target.value = '';
        // this.forceUpdate();

        // const eleID = recipe.ingredients.length;
        // document.getElementById("ingredients" + eleID).focus();
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
                                <div className='recipe-preview-price-wrapper'>
                                    <div className='recipe-preview-price'>
                                        <label className='recipe-preview-price'>Kcal:</label>
                                        <input defaultValue={recipe.calories} className='recipe-preview-price' name='calories' onChange={handleInputChange}></input>
                                    </div>
                                </div>

                                <div className='recipe-preview-time-wrapper'>
                                    <div className='recipe-preview-time'>
                                        <label className='recipe-preview-price'>mins:</label>
                                        <input defaultValue={recipe.time} className='recipe-preview-price' name='time' onChange={handleInputChange} on></input>
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
                                        <li key={index}><input defaultValue={ingredient} className='invisable-edit' id={'ingredients' + index} name='ingredients' onChange={handleInputChange} /></li>
                                    ))}
                                <li><input className='invisable-edit' name='title' id='new-ingredient'/><button onClick={handleNewIngredientChange}>add ingredient</button></li>
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
                        {/* <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}> */}
                        <button className="edit-button" onClick={EditClick}>Save</button>
                        {/* </Link> */}
                    </div>

                </div>


                : <div>Loading...</div>}
        </main>
    )
}
export default Recipe;