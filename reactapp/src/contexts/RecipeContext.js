import React, { createContext } from "react";

import useRecipe from "../hooks/useRecipe";

export const RecipeContext = createContext();

function RecipeProvider({ children, id }) {
  const {
    recipe,
    newIngredient,
    newInstruction,
    EditClick,
    ArchiveClick,
    handleFileChange,
    handleNewIngredientChange,
    handleIngredientChange,
    handleNewIngredientSubmit,
    handleNewInstructionChange,
    handleNewInstructionSubmit,
    handleInstructionChange,
    handleRecipeChange,
  } = useRecipe(id);

  return (
    <RecipeContext.Provider
      value={{
        recipe,
        newIngredient,
        newInstruction,
        EditClick,
        ArchiveClick,
        handleFileChange,
        handleNewIngredientChange,
        handleIngredientChange,
        handleNewIngredientSubmit,
        handleNewInstructionChange,
        handleNewInstructionSubmit,
        handleInstructionChange,
        handleRecipeChange,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export { RecipeProvider };
