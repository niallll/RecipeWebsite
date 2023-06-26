import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  CardText,
  Badge,
  Row,
  CardImg,
} from "reactstrap";
import { RecipeFilterContext } from "../contexts/RecipeFilterContext";

const RecipeCards = () => {
  const { recipes, maxCals } = useContext(RecipeFilterContext);

  return (
    <Row className="px-1">
      {recipes != null ? (
        recipes.map(
          (item) =>
            item.calories <= maxCals && (
              <Col>
                <Link
                  to={`/recipe/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card style={{ width: "19.5rem" }} className="recipe-preview">
                    <CardImg
                      src={`https://localhost:3000/images/${item.imageName}`}
                    />
                    <CardBody>
                      <CardTitle tag="h5">{item.title}</CardTitle>
                      <CardText>
                        <h4>
                          <Badge color="primary" className="mr-1">
                            {item.calories} Kcal
                          </Badge>
                          <span> </span>
                          <Badge color="primary" className="mr-1">
                            {item.time} mins
                          </Badge>
                          <span> </span>
                          <Badge color="primary" className="mr-1">
                            {item.servings} Servings
                          </Badge>
                        </h4>
                      </CardText>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            )
        )
      ) : (
        <Col>Loading...</Col>
      )}
    </Row>
  );
};
export default RecipeCards;
