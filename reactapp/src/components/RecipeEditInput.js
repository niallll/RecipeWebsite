import React, { useContext } from "react";

import { Input, Col, FormGroup, Label } from "reactstrap";
import { RecipeContext } from "../contexts/RecipeContext";

const RecipeEditInput = (props) => {
  const { handleRecipeChange } = useContext(RecipeContext);
  const { LabelName, DefaultValue, Name } = props;
  return (
    <FormGroup row>
      <Label sm={1}>{LabelName}: </Label>
      <Col sm={2}>
        <Input
          defaultValue={DefaultValue}
          onChange={handleRecipeChange}
          name={Name}
        ></Input>
      </Col>
    </FormGroup>
  );
};
export default RecipeEditInput;
