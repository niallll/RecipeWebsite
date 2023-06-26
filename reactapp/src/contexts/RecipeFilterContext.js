import React, { createContext } from "react";

import useFilters from "../hooks/useFilters";

export const RecipeFilterContext = createContext();

function RecipeFilterProvider({ children, id }) {
  const { maxCals, HandleCalorieFilterChange, recipes } = useFilters(id);

  return (
    <RecipeFilterContext.Provider
      value={{
        maxCals,
        HandleCalorieFilterChange,
        recipes,
      }}
    >
      {children}
    </RecipeFilterContext.Provider>
  );
}

export { RecipeFilterProvider };
