import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Col, Row, Badge } from "reactstrap";
import RecipeImage from "./RecipeImage";

const Recipe = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    console.log(id);
    axios
      .get(`https://localhost:3000/api/recipe/${id}`)
      .then((results) => {
        console.log(results);
        return results.data;
      })
      .then((data) => {
        // console.log(data)
        setRecipe(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  return (
    <main>
      {recipe != null ? (
        <div>
          <h2>{recipe.title}</h2>
          <Row>
            <Col className="my-2">
              <RecipeImage recipe={recipe} />
            </Col>
            <Col className="my-2" lg="">
              <Row className="h-90">{recipe.description}</Row>

              <Row>
                <Col className="mx-1" sm="1">
                  <Badge color="primary">{recipe.calories} Kcal</Badge>
                </Col>
                <Col className="mx-1" sm="1">
                  <Badge color="primary mx-3">{recipe.time} mins</Badge>
                </Col>
              </Row>
            </Col>
          </Row>

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
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};
export default Recipe;
