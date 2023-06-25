import React from "react";
import { useParams } from "react-router-dom";

import { RecipeProvider } from "../contexts/RecipeContext";
import RecipeTop from "./RecipeTop";
import RecipeBottom from "./RecipeBottom";

const Recipe = () => {
  const { id } = useParams();

  return (
    <RecipeProvider id={id}>
      <RecipeTop />
      <RecipeBottom />
    </RecipeProvider>
  );
};
export default Recipe;
