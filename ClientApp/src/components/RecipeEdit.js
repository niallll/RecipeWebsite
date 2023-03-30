import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import MovieImageArr from './MovieImages';
import { Button, ListGroup } from 'react-bootstrap';
import EditableLabel from './EditableLabel';

const Recipe = () => {
    const {id} = useParams();

    const [recipe, setRecipe] = useState(null);

    const [isEditing, setIsEditing] = useState(false);

    function EditClick() {
      setIsEditing(!isEditing);
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


    return (
        <main>
            {recipe != null ? 
            <div> 
                <input style={{height:"38.39px", marginBottom:"8px", border: "0px", padding: "0px", fontSize: "25pt", width: "100%"}} defaultValue={recipe.title}></input>           

                <div style={{display:"flex", marginBottom:"40px"}}>   
                    <img src={MovieImageArr.find(o => o.id === recipe.imageId)?.image} alt={recipe.title} className='recipe-img-edit'/>
                    <div className='recipe-description-area'>
                        <textarea  defaultValue={recipe.description} className="textarea"/>

                        <div className='recipe-info-boxes'>
                            <div className='recipe-preview-price-wrapper'>
                                <div className='recipe-preview-price'>
                                    <label className='recipe-preview-price'>Kcal:</label>
                                    <input defaultValue={recipe.calories}  className='recipe-preview-price'></input>
                                </div>
                            </div>

                            <div className='recipe-preview-time-wrapper'>
                                <div className='recipe-preview-time'>
                                    <label className='recipe-preview-price'>mins:</label>
                                    <input defaultValue={recipe.time}  className='recipe-preview-price'></input>
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
                            <li key={index}><input defaultValue={ingredient} style={{border: "0px", padding: "0px", backgroundColor:"#0a0a2299"}}/></li>
                            ))}
                        </ul>
                    </div>

                    <div className='list-instructions-wrapper'>
                        <h2>Instructions</h2>
                        <ol className='list-instructions'>
                            {recipe.instructions && recipe.instructions.map((instruction, index) => (
                            <li key={index}><input defaultValue={instruction} style={{border: "0px", padding: "0px"}}/></li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className='recipe-ingredient-instructions'>
                    <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
                        <button className="edit-button">Cancel</button>
                    </Link>
                </div>

            </div>


            : <div>Loading...</div>}
        </main>
    ) 
}
export default Recipe;