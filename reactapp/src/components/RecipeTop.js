import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { Col, Row, Badge } from "reactstrap";
import RecipeImage from "./RecipeImage";
import RecipeNutritionBoxes from "./RecipeNutritionBoxes";

const RecipeTop = () => {
  const { recipe } = useContext(RecipeContext);

  return (
    <>
      <h2>{recipe.title}</h2>
      <Row>
        <Col className="my-2">
          <RecipeImage recipe={recipe} />
        </Col>
        <Col className="my-2" lg="" style={{ height: "310px" }}>
          <Row className="h-90">{recipe.description}</Row>
          <Row>
            <Col className="m-2" sm="3">
              <Badge color="primary mx-3">{recipe.time} mins</Badge>
            </Col>
            <Col className="m-2" sm="3">
              <Badge color="primary mx-3">{recipe.servings} servings</Badge>
            </Col>
          </Row>
          <RecipeNutritionBoxes />
        </Col>
      </Row>
    </>
  );
};

export default RecipeTop;
