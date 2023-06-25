import React from "react";
import { useParams } from "react-router-dom";

import RecipeEditInstructionIngredients from "./RecipeEditInstructionIngredients";
import RecipeEditTop from "./RecipeEditTop";
import RecipeEditButtons from "./RecipeEditButtons";
import { RecipeProvider } from "../contexts/RecipeContext";

const Recipe = () => {
  const { id } = useParams();

  return (
    <RecipeProvider id={id}>
      <RecipeEditTop />
      <RecipeEditInstructionIngredients />
      <RecipeEditButtons />
    </RecipeProvider>
  );
};
export default Recipe;
