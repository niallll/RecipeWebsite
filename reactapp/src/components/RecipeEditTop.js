import React, { useContext } from "react";

import { Input, Form, Row, Col, FormGroup, Label } from "reactstrap";
import { RecipeContext } from "../contexts/RecipeContext";
import RecipeImage from "./RecipeImage";
import RecipeEditInput from "./RecipeEditInput";

const RecipeEditTop = () => {
  const { recipe, handleFileChange, handleRecipeChange } =
    useContext(RecipeContext);

  return (
    <>
      <Input
        className="my-2"
        defaultValue={recipe.title}
        name="title"
        onChange={handleRecipeChange}
      ></Input>
      <div className="my-2">
        <Row>
          <Col className="my-2">
            <RecipeImage recipe={recipe} />
          </Col>
          <Col className="my-2" lg="">
            <Input
              id="exampleText"
              name="description"
              type="textarea"
              defaultValue={recipe.description}
              style={{ height: "300px", resize: "none" }}
              onChange={handleRecipeChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
            ></Input>
          </Col>
        </Row>
      </div>

      <Form className="my-3">
        <RecipeEditInput
          LabelName="Mins"
          DefaultValue={recipe.time}
          Name="time"
        />
        <RecipeEditInput
          LabelName="Servings"
          DefaultValue={recipe.servings}
          Name="servings"
        />
        <RecipeEditInput
          LabelName="Kcal"
          DefaultValue={recipe.calories}
          Name="calories"
        />
        <RecipeEditInput LabelName="Fat" DefaultValue={recipe.fat} Name="fat" />
        <RecipeEditInput
          LabelName="Saturates"
          DefaultValue={recipe.saturates}
          Name="saturates"
        />
        <RecipeEditInput
          LabelName="Sugars"
          DefaultValue={recipe.sugars}
          Name="sugars"
        />
        <RecipeEditInput
          LabelName="Protein"
          DefaultValue={recipe.protein}
          Name="protein"
        />
        <RecipeEditInput
          LabelName="Carbs"
          DefaultValue={recipe.carbs}
          Name="carbs"
        />
      </Form>
    </>
  );
};
export default RecipeEditTop;
