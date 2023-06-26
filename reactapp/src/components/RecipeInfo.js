import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { Col, Row, Badge } from "reactstrap";

const RecipeInfo = () => {
  const { recipe } = useContext(RecipeContext);

  return (
    <>
      <Row>
        <Col className="m-2" sm="3">
          <Badge color="primary mx-3">{recipe.time} mins</Badge>
        </Col>
      </Row>
    </>
  );
};

export default RecipeInfo;
