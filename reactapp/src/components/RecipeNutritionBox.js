import React, { useState } from "react";
import { Col, Tooltip } from "reactstrap";

const RecipeNutritionBox = (props) => {
  const { NutritionType, Amount, DailyAllowance, Description } = props;

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <>
      <Col id={`NutritionBox${NutritionType}`} className="px-0" sm="2">
        <div
          style={{
            "border-style": "solid",
            "border-width": "1px",
            margin: "3px",
          }}
        >
          <div className="text-center">{NutritionType}</div>
          <div
            className="text-center mx-2"
            style={{ "border-bottom-style": "solid", "border-width": "1px" }}
          >
            <h6 className="text-center">{Amount}</h6>
          </div>
          <h6 className="text-center">{(Amount * 100) / DailyAllowance}%</h6>
        </div>
      </Col>
      <Tooltip
        isOpen={tooltipOpen}
        target={`NutritionBox${NutritionType}`}
        toggle={toggle}
        placement="bottom"
        title={NutritionType}
        className="veryLongTooltip"
      >
        <h3
          style={{
            color: "whitesmoke",
            "border-bottom-style": "solid",
            "border-width": "1px",
          }}
        >
          {NutritionType}
        </h3>
        <h6 style={{ color: "whitesmoke" }}>{Description}</h6>
      </Tooltip>
    </>
  );
};

export default RecipeNutritionBox;
