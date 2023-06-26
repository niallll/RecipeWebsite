import React, { createContext } from "react";

import useFilters from "../hooks/useFilters";

export const RecipeFilterContext = createContext();

function RecipeFilterProvider({ children, id }) {
  const { maxCals, HandleCalorieFilterChange } = useFilters(id);

  return (
    <RecipeFilterContext.Provider
      value={{
        maxCals,
        HandleCalorieFilterChange,
      }}
    >
      {children}
    </RecipeFilterContext.Provider>
  );
}

export { RecipeFilterProvider };
