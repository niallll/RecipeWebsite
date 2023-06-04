import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import MovieImageArr from './MovieImages';
import axios from 'axios';
import RecipeEditNumberValue from './RecipeEditTime';
import { Button } from 'reactstrap';


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

    const [newIngredient, setNewIngredient] = useState('');
    const [newInstruction, setNewInstruction] = useState('');

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
                setRecipe(data);
            })
            .catch(e => { console.log(e); })
    }, [id]);

    const handleNewIngredientChange = (event) => {
        const { value } = event.target;
        setNewIngredient(value);
    }

    const handleNewIngredientSubmit = () => {
        setRecipe((prevState) => ({
            ...prevState,
            'ingredients': [...prevState.ingredients, newIngredient]
        }));
        setNewIngredient('');
    }

    const handleNewInstructionChange = (event) => {
        const { value } = event.target;
        setNewInstruction(value);
    }

    const handleNewInstructionSubmit = () => {
        var max = 0;
        if (recipe.instructions.length > 0){
            max = recipe.instructions.reduce(function (prev, current) {
                return (prev.stepNumber > current.stepNumber) ? prev : current
            }).stepNumber + 1;
        }

        setRecipe((prevState) => ({
            ...prevState,
            'instructions': [...prevState.instructions, { id: null, instructionText: newInstruction, stepNumber: max }]
        }));
        setNewInstruction('');
    }

    const handleInstructionChange = (event, index) => {
        const { name, value } = event.target;

        const updatedInstructions = recipe.instructions;
        const InstructionIndex = updatedInstructions.findIndex(i => i.stepNumber === index);
        updatedInstructions[InstructionIndex].instructionText = value;

        setRecipe((prevState) => ({
            ...prevState,
            'instructions': updatedInstructions
        }));
    };

    const handleRecipeChange = (event) => {
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
                    <input className='header-edit' defaultValue={recipe.title} name='title' onChange={handleRecipeChange}></input>

                    <div style={{ display: "flex", marginBottom: "40px" }}>
                        <img src={MovieImageArr.find(o => o.id === recipe.imageId)?.image} alt={recipe.title} className='recipe-img-edit' />
                        <div className='recipe-description-area'>
                            <textarea defaultValue={recipe.description} className="textarea" name='description' onChange={handleRecipeChange} />
                            <div className='recipe-info-boxes'>
                                <RecipeEditNumberValue name='calories' text='Kcal' value={recipe.calories} handleInputChange={handleRecipeChange} />
                                <RecipeEditNumberValue name='time' text='mins' value={recipe.time} handleInputChange={handleRecipeChange} />
                            </div>
                        </div>
                    </div>


                    <div className='recipe-ingredient-instructions'>
                        <div>
                            <h2>Ingredients</h2>
                            <ul className='my-list'>
                                {recipe.ingredients != null &&
                                    recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>
                                            <span contenteditable="true">{ingredient.amount}</span>
                                            <span contenteditable="true">{ingredient.unit}</span>
                                            <span> </span>
                                            <span contenteditable="true">{ingredient.name}</span>
                                        </li>
                                    ))}
                                <li>
                                    <span contenteditable="true">#</span>
                                    <span contenteditable="true">A</span>
                                    <span> </span>
                                    <span contenteditable="true">ABC</span>
                                    <input className='invisable-edit' id='new-ingredient' onChange={handleNewIngredientChange} value={newIngredient} />
                                    <button onClick={handleNewIngredientSubmit}>add ingredient</button>
                                </li>
                            </ul>
                        </div>

                        <div className='list-instructions-wrapper'>
                            <h2>Instructions</h2>
                            <ol className='list-instructions'>
                                {recipe.instructions && recipe.instructions.sort((a, b) => a.stepNumber - b.stepNumber).map((instruction, index) => (
                                    <li key={index}>
                                        <input defaultValue={instruction.instructionText} className='invisable-edit' name='instructions' onChange={e => handleInstructionChange(e, instruction.stepNumber)} />
                                    </li>
                                ))}
                                <li>
                                    <input className='invisable-edit' id='new-instruction' onChange={handleNewInstructionChange} value={newInstruction} />
                                    <button onClick={handleNewInstructionSubmit}>add instruction</button>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className='recipe-ingredient-instructions'>
                        <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
                            <Button color='warning'>Cancel</Button>
                        </Link>
                        <Button color='success' onClick={EditClick}>Save</Button>
                    </div>

                </div>


                : <div>Loading...</div>}
        </main>
    )
}
export default Recipe;