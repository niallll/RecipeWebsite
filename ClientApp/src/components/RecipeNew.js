import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieImageArr from './MovieImages';
import { Button, ListGroup } from 'react-bootstrap';
import EditableLabel from './EditableLabel';
import axios from 'axios';

const Recipe = () => {
    const [isEditing, setIsEditing] = useState(false);

    const [recipie, setRecipie] = useState({
        title: '',
        calories: 0,
        time: 0,
        description: '',
        ingredients: [],
        instructions: []
    });

    function EditClick() {
        setIsEditing(!isEditing);
        alert(recipie.title);

        axios.post(`recipe`, recipie)
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'ingredients':
                setRecipie((prevState) => ({
                    ...prevState,
                    [name]: [value]
                }));
                break;
            case 'instructions':
                setRecipie((prevState) => ({
                    ...prevState,
                    [name]: [value]
                }));
                break;
            default:
                setRecipie((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    return (
        <main>
            <div>
                <input className='header-edit' name='title' onChange={handleInputChange}></input>

                <div style={{ display: "flex", marginBottom: "40px" }}>
                    <img className='recipe-img-edit' />
                    <div className='recipe-description-area'>
                        <textarea className="textarea" name='description' onChange={handleInputChange} />

                        <div className='recipe-info-boxes'>
                            <div className='recipe-preview-price-wrapper'>
                                <div className='recipe-preview-price'>
                                    <label className='recipe-preview-price'>Kcal:</label>
                                    <input className='recipe-preview-price' input type="number" name='calories' onChange={handleInputChange}></input>
                                </div>
                            </div>

                            <div className='recipe-preview-time-wrapper'>
                                <div className='recipe-preview-time'>
                                    <label className='recipe-preview-price'>mins:</label>
                                    <input className='recipe-preview-price' input type="number" name='time' onChange={handleInputChange}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='recipe-ingredient-instructions'>
                    <div>
                        <h2>Ingredients</h2>
                        <ul className='my-list'>
                            <li><input className='invisable-edit' name='ingredients' onChange={handleInputChange} /></li>
                        </ul>
                    </div>

                    <div className='list-instructions-wrapper'>
                        <h2>Instructions</h2>
                        <ol className='list-instructions'>
                            <li><input className='invisable-edit' name='instructions' onChange={handleInputChange} /></li>
                        </ol>
                    </div>
                </div>

                <div className='recipe-ingredient-instructions'>
                    <Link to={`/`} style={{ textDecoration: 'none' }}>
                        <button className="edit-button">Cancel</button>
                    </Link>
                    <button className="edit-button" onClick={EditClick}>Save</button>
                </div>

            </div>
        </main>
    )
}
export default Recipe;