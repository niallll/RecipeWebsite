import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { Col, Row, Badge } from "reactstrap";
import RecipeImage from "./RecipeImage";
import RecipeNutritionBox from "./RecipeNutritionBox";

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
          </Row>

          <Row>
            <RecipeNutritionBox
              NutritionType="Calories"
              Amount={recipe.calories}
              DailyAllowance={2000}
            />

            <RecipeNutritionBox
              NutritionType="Fat"
              Amount={recipe.fat}
              DailyAllowance={200}
            />
            <RecipeNutritionBox
              NutritionType="Saturated"
              Amount={recipe.saturates}
              DailyAllowance={2000}
            />
            <RecipeNutritionBox
              NutritionType="Sugars"
              Amount={recipe.sugars}
              DailyAllowance={2000}
            />
            <RecipeNutritionBox
              NutritionType="Protien"
              Amount={recipe.protein}
              DailyAllowance={2000}
            />
            <RecipeNutritionBox
              NutritionType="Carbs"
              Amount={recipe.carbs}
              DailyAllowance={2000}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default RecipeTop;
