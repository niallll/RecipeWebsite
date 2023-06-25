import React, { useContext } from "react";
import { Button, Input, Row, Col } from "reactstrap";
import { RecipeContext } from "../contexts/RecipeContext";

function RecipeEditInstructionIngredients() {
  const {
    recipe,
    newIngredient,
    newInstruction,
    handleNewIngredientChange,
    handleIngredientChange,
    handleNewIngredientSubmit,
    handleNewInstructionChange,
    handleNewInstructionSubmit,
    handleInstructionChange,
  } = useContext(RecipeContext);

  return (
    <Row className="recipe-ingredient-instructions">
      <Col lg="4">
        <h2>Ingredients</h2>
        <ul className="my-list">
          {recipe.ingredients != null &&
            recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <Input
                  defaultValue={ingredient.name}
                  name="ingredients"
                  onChange={(e) =>
                    handleIngredientChange(e, ingredient.stepNumber)
                  }
                />
              </li>
            ))}
          <li>
            <Input
              id="new-ingredient"
              onChange={handleNewIngredientChange}
              value={newIngredient}
            />
            <Button onClick={handleNewIngredientSubmit} className="m-2">
              add ingredient
            </Button>
          </li>
        </ul>
      </Col>

      <Col lg="8">
        <h2>Instructions</h2>
        <ul className="list-instructions">
          {recipe.instructions &&
            recipe.instructions
              .sort((a, b) => a.stepNumber - b.stepNumber)
              .map((instruction, index) => (
                <li key={index}>
                  <Input
                    defaultValue={instruction.instructionText}
                    name="instructions"
                    onChange={(e) =>
                      handleInstructionChange(e, instruction.stepNumber)
                    }
                  />
                </li>
              ))}
          <li>
            <Input
              id="new-instruction"
              onChange={handleNewInstructionChange}
              value={newInstruction}
            />
            <Button onClick={handleNewInstructionSubmit} className="m-2">
              add instruction
            </Button>
          </li>
        </ul>
      </Col>
    </Row>
  );
}
export default RecipeEditInstructionIngredients;
