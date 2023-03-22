import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';

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
                console.log(data);
                console.log(data[0]);
                setRecipe(data[0]);
            })
            .catch(e => { console.log(e); })
    }, []);


    return (
        <main>
            {recipe != null ? 
            <div>            
                <h2>{recipe.title}</h2>
                <div>calories: {recipe.calories}</div>
                <div>time: {recipe.time}</div>
            </div>


            : <div>Loading...</div>}
        </main>
    ) 
}
export default Recipe;