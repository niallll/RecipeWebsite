import React, { useContext } from "react";

import { Input, Form, Row, Col, FormGroup, Label } from "reactstrap";
import { RecipeContext } from "../contexts/RecipeContext";

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
            <img
              src={`https://localhost:3000/images/${recipe.imageName}`}
              alt={recipe.title}
              className="recipe-img-edit"
            />
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
        <FormGroup row>
          <Label sm={1}>Kcal: </Label>
          <Col sm={2}>
            <Input
              defaultValue={recipe.calories}
              onChange={handleRecipeChange}
              name="calories"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={1}>Mins: </Label>
          <Col sm={2}>
            <Input
              defaultValue={recipe.time}
              onChange={handleRecipeChange}
              name="time"
            ></Input>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
};
export default RecipeEditTop;
