import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieImageArr from './MovieImages';
import { Button, Col, Row, Badge, Container } from 'reactstrap';

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
                    <Row>
                        <Col className='my-2'>
                            <img src={MovieImageArr.find(o => o.id === recipe.imageId)?.image} alt={recipe.title} className='recipe-img' />
                        </Col>
                        <Col className='my-2' md="">
                            <Row className='h-90'>{recipe.description}</Row>

                            <Row>
                                <Col className='mx-1' sm="1">
                                    <Badge color='primary'>
                                        {recipe.calories} Kcal
                                    </Badge>
                                    </Col>
                                    <Col className='mx-1' sm="1">
                                    <Badge color='primary mx-3'>
                                        {recipe.time} mins
                                    </Badge>
                                </Col>
                            </Row>

                        </Col>
                    </Row>

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