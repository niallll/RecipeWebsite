import React, { useState, useEffect } from "react";
import RecipiesFilter from "./RecipiesFilter";
import { RecipeFilterProvider } from "../contexts/RecipeFilterContext";
import RecipeCards from "./RecipeCards";

const Recipies = () => {
  return (
    <RecipeFilterProvider>
      <h2>Recipes</h2>
      <RecipiesFilter></RecipiesFilter>
      <RecipeCards></RecipeCards>
    </RecipeFilterProvider>
  );
};
export default Recipies;
