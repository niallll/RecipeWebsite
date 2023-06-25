import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { Button, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const RecipeBottom = () => {
  const { recipe } = useContext(RecipeContext);

  return (
    <>
      <Row className="recipe-ingredient-instructions">
        <Col lg="4">
          <h2>Ingredients</h2>
          <ul className="my-list">
            {recipe.ingredients != null &&
              recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.amount}
                  {ingredient.unit} {ingredient.name}
                  {(ingredient.amount > 1) & !ingredient.unit ? "s" : ""}
                </li>
              ))}
          </ul>
        </Col>

        <Col className="list-instructions-wrapper" lg="8">
          <h2>Instructions</h2>
          <ol className="list-instructions">
            {recipe.instructions &&
              recipe.instructions
                .sort((a, b) => a.stepNumber - b.stepNumber)
                .map((instruction, index) => (
                  <li key={index}>{instruction.instructionText}</li>
                ))}
          </ol>
        </Col>
      </Row>

      <div className="m-2">
        <Link
          to={`/recipe-edit/${recipe.id}`}
          style={{ textDecoration: "none" }}
        >
          <Button color="warning">Edit</Button>
        </Link>
      </div>
    </>
  );
};

export default RecipeBottom;
