import React, { useState } from 'react';
import { Button, Input, Form, Container, Row , Col, textarea, FormGroup, Label} from 'reactstrap';

function EditInstructionIngredients(props) {
  let {recipe, newIngredient, newInstruction, 
    handleIngredientChange, handleInstructionChange, 
    handleNewIngredientChange, handleNewInstructionChange, 
    handleNewIngredientSubmit, handleNewInstructionSubmit} = props;

  return (
    <div className='recipe-ingredient-instructions'>
      <div>
        <h2>Ingredients</h2>
        <ul className='my-list'>
          {recipe.ingredients != null &&
            recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <Input defaultValue={ingredient.name} name='ingredients' onChange={e => handleIngredientChange(e, ingredient.stepNumber)} />
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
              <Input defaultValue={instruction.instructionText} name='instructions' onChange={e => handleInstructionChange(e, instruction.stepNumber)} />
            </li>
          ))}
          <li>
            <Input id='new-instruction' onChange={handleNewInstructionChange} value={newInstruction} />
            <Button onClick={handleNewInstructionSubmit} className='m-2'>add instruction</Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default EditInstructionIngredients;