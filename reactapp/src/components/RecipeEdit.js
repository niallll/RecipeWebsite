import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import MovieImageArr from './MovieImages';
import axios from 'axios';
import EditInstructionIngredients from './EditInstructionIngredients';
import { Button, Input, Form, Container, Row, Col, textarea, FormGroup, Label } from 'reactstrap';


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
    const [selectedFile, setSelectedFile] = useState(null);

    const navigate = useNavigate();

    function EditClick() {
        axios.put(`api/recipe/${id}`, recipe)
            .then((response) => {
                console.log(response);
                navigate(`/recipe/${recipe.id}`);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get(`api/recipe/${id}`)
            .then((results) => {
                return results.data;
            })
            .then(data => {
                setRecipe(data);
            })
            .catch(e => { console.log(e); }) 
    }, [id]);

    const handleFileChange = (event) => {
        event.target.files[0] == undefined ? setSelectedFile(null) : setSelectedFile(event.target.files[0])
      };

    const handleNewIngredientChange = (event) => {
        const { value } = event.target;
        setNewIngredient(value);
    }

    const handleNewIngredientSubmit = () => {
        var max = 0;
        if (recipe.ingredients.length > 0) {
            max = recipe.ingredients.reduce(function (prev, current) {
                return (prev.stepNumber > current.stepNumber) ? prev : current
            }).stepNumber + 1;
        }

        setRecipe((prevState) => ({
            ...prevState,
            'ingredients': [...prevState.ingredients, { id: -1, name: newIngredient, stepNumber: max }]
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
        if (recipe.instructions.length > 0) {
            max = recipe.instructions.reduce(function (prev, current) {
                return (prev.stepNumber > current.stepNumber) ? prev : current
            }).stepNumber + 1;
        }

        setRecipe((prevState) => ({
            ...prevState,
            'instructions': [...prevState.instructions, { id: -1, instructionText: newInstruction, stepNumber: max }]
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

        setRecipe((prevState) => ({
            ...prevState,
            [name]: value
        }));
        
    };

    return (
        <main>
            {recipe != null ?
                <div>
                    <Input className='my-2' defaultValue={recipe.title} name='title' onChange={handleRecipeChange}></Input>
                    <div className='my-2'>
                        <Row>
                            <Col className='my-2'>
                                <img src={MovieImageArr.find(o => o.id === recipe.imageId)?.image} alt={recipe.title} className='recipe-img-edit' />
                            </Col>
                            <Col className='my-2' lg="">
                                <Input
                                    id="exampleText"
                                    name="description"
                                    type="textarea"
                                    defaultValue={recipe.description}
                                    style={{ height: "300px", resize: "none" }}
                                    onChange={handleRecipeChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input type='file' onChange={handleFileChange}></Input>
                            </Col>
                        </Row>
                    </div>

                    <Form className='my-3'>
                        <FormGroup row>
                            <Label sm={1}>Kcal: </Label>
                            <Col sm={2}>
                                <Input defaultValue={recipe.calories} onChange={handleRecipeChange} name="calories"></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={1}>Mins: </Label>
                            <Col sm={2}>
                                <Input defaultValue={recipe.time} onChange={handleRecipeChange} name="time"></Input>
                            </Col>
                        </FormGroup>
                    </Form>

                    <EditInstructionIngredients recipe={recipe} newIngredient={newIngredient} newInstruction={newInstruction}
                        handleIngredientChange={handleIngredientChange} handleNewIngredientChange={handleNewIngredientChange} handleNewIngredientSubmit={handleNewIngredientSubmit}
                        handleInstructionChange={handleInstructionChange} handleNewInstructionChange={handleNewInstructionChange} handleNewInstructionSubmit={handleNewInstructionSubmit} />

                    <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
                        <Button color='warning' className='m-2'>Cancel</Button>
                    </Link>
                    <Button color='success' className='m-2' onClick={EditClick}>Save</Button>


                </div>


                : <div>Loading...</div>} 
        </main>
    )
}
export default Recipe;