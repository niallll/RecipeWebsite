import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import MovieImageArr from './MovieImages';
import axios from 'axios';
import RecipeEditNumberValue from './RecipeEditTime';
import { Button, Input } from 'reactstrap';


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
        var max = 0;
        if (recipe.ingredients.length > 0){
            max = recipe.ingredients.reduce(function (prev, current) {
                return (prev.stepNumber > current.stepNumber) ? prev : current
            }).stepNumber + 1;
        }

        setRecipe((prevState) => ({
            ...prevState,
            'ingredients': [...prevState.ingredients, { id: null, name: newIngredient, stepNumber: max }]
        }));
        setNewIngredient('');
    }

    const handleIngredientChange = (event, index) => {
        const { value } = event.target;

        const updatedIngredients = recipe.ingredients;
        const IngredientIndex = updatedIngredients.findIndex(i => i.stepNumber === index);
        console.log(IngredientIndex);
        updatedIngredients[IngredientIndex].name = value;
 
        setRecipe((prevState) => ({
            ...prevState,
            'ingredients': updatedIngredients
        }));
    };

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
        const { value } = event.target;

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
                    [name]: [value]
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
                                            <Input defaultValue={ingredient.name}  name='ingredients' onChange={e => handleIngredientChange(e, ingredient.stepNumber)} />
                                        </li>
                                    ))}
                                <li>
                                    <Input id='new-ingredient' onChange={handleNewIngredientChange} value={newIngredient} />
                                    <Button onClick={handleNewIngredientSubmit} className='m-2'>add ingredient</Button>
                                </li>
                            </ul>
                        </div>

                        <div className='list-instructions-wrapper'>
                            <h2>Instructions</h2>
                            <ul className='list-instructions'>
                                {recipe.instructions && recipe.instructions.sort((a, b) => a.stepNumber - b.stepNumber).map((instruction, index) => (
                                    <li key={index}>
                                        <Input defaultValue={instruction.instructionText}  name='instructions' onChange={e => handleInstructionChange(e, instruction.stepNumber)} />
                                    </li>
                                ))}
                                <li>
                                    <Input id='new-instruction' onChange={handleNewInstructionChange} value={newInstruction} />
                                    <Button onClick={handleNewInstructionSubmit} className='m-2'>add instruction</Button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='recipe-ingredient-instructions'>
                        <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
                            <Button color='warning' className='m-2'>Cancel</Button>
                        </Link>
                        <Button color='success' className='m-2' onClick={EditClick}>Save</Button>
                    </div>

                </div>


                : <div>Loading...</div>}
        </main>
    )
}
export default Recipe;