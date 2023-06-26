import React from "react";
import { Col } from "reactstrap";

const RecipeNutritionBox = (props) => {
  const { NutritionType, Amount, DailyAllowance } = props;

  return (
    <Col className="px-0" sm="2">
      <div
        style={{
          "border-style": "solid",
          "border-width": "1px",
          width: "76px",
        }}
      >
        <h6 className="text-center">{NutritionType}</h6>
        <div
          className="text-center mx-2"
          style={{ "border-bottom-style": "solid", "border-width": "1px" }}
        >
          <h5 className="text-center">{Amount}</h5>
        </div>
        <h5 className="text-center">{(Amount * 100) / DailyAllowance}%</h5>
      </div>
    </Col>
  );
};

export default RecipeNutritionBox;
