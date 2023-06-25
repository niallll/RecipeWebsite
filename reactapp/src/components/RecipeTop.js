import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { Col, Row, Badge } from "reactstrap";
import RecipeImage from "./RecipeImage";

const RecipeTop = () => {
  const { recipe } = useContext(RecipeContext);

  return (
    <>
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
    </>
  );
};

export default RecipeTop;
