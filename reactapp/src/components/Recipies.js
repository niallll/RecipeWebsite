import React, { useState, useEffect } from "react";
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
import RecipiesFilter from "./RecipiesFilter";
import { RecipeFilterProvider } from "../contexts/RecipeFilterContext";
import RecipeCards from "./RecipeCards";

const Recipies = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(`api/recipe`)
      .then((results) => {
        console.log(results);
        return results.json();
      })
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <RecipeFilterProvider>
      <h2>Recipes</h2>
      <RecipiesFilter></RecipiesFilter>
      <RecipeCards items={items}></RecipeCards>
    </RecipeFilterProvider>
  );
};
export default Recipies;
